import React, { useEffect, useState } from "react";
import Web3 from "web3";

import { useWallet } from "use-wallet";
import { StyledCard, InnerCard } from "./StyledCard";
import Bar from "./components/Bar";
import Amount from "./components/Amount";
import Total from "./components/Total";
import CONFIG from "../../../../config";
import PresaleABI from "../../../../config/ABI/PresaleABI.json";
import ERC20ABI from "../../../../config/ABI/ERC20.json";

import Button from "../../../../components/Button/Button";
import toast from "react-hot-toast";
import { Flex } from "../Flex";
import Text from "../../../../components/Text/Text";

const Card = () => {
  const wallet = useWallet();
  const [presaleContract, setPresaleContract] = useState();
  const [usdcContract, setUSDCContract] = useState();
  const [isInitialized, setInitialized] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [isParticipationOpen, setParticipationOpen] = useState(false);
  const [totalTokensSold, setTotalTokensSold] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [inputAmount, setInputAmount] = useState();
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [isApproved, setApproved] = useState(false);

  const initializeContracts = async () => {
    const web3 = new Web3(wallet.ethereum ? wallet.ethereum : CONFIG.RPC);
    const _presaleContract = new web3.eth.Contract(
      PresaleABI,
      CONFIG.HBTPresale
    );

    const _USDCContract = new web3.eth.Contract(ERC20ABI, CONFIG.USDC);

    setPresaleContract(_presaleContract);
    setUSDCContract(_USDCContract);
    setInitialized(true);
  };

  const loadContractData = async () => {
    const _tokenPrice = await presaleContract.methods.tokenPrice().call();
    const _isParticipationOpen = await presaleContract.methods
      .isParticipationOpen()
      .call();
    const _totalTokensSold = await presaleContract.methods
      .totalTokenSold()
      .call();

    if (wallet.account) {
      const _usdcBalance = await usdcContract.methods
        .balanceOf(wallet.account)
        .call();
      const decimals = await usdcContract.methods.decimals().call();
      console.log({ decimals });
      setUsdcBalance(_usdcBalance);
      const isApproved = await usdcContract.methods
        .allowance(wallet.account, CONFIG.HBTPresale)
        .call();
      setApproved(Number(isApproved) > 0);
    }
    setTokenPrice(_tokenPrice / 1e6);
    setParticipationOpen(_isParticipationOpen);
    setTotalTokensSold(Number(_totalTokensSold) / 1e18);

    console.log({ _tokenPrice });
  };

  useEffect(() => {
    initializeContracts();
    const interval = setInterval(() => {
      initializeContracts();
    }, 4000);
    return () => clearInterval(interval);
  }, [wallet.account, wallet.ethereum]);

  useEffect(() => {
    if (isInitialized) {
      loadContractData();
    }
  }, [isInitialized, wallet.account]);

  const handleonPurchase = async () => {
    if (!isApproved) {
      setLoading(true);

      try {
        await usdcContract.methods
          .approve(CONFIG.HBTPresale, "100000000000000000000000000000")
          .send({ from: wallet.account });
        toast.success("Contact Approved!");
        await loadContractData();
      } catch (err) {}

      setLoading(false);

      return;
    } else {
      if (!inputAmount) {
        toast.error("Please Enter USDC amount ");
        return;
      }
    }

    if (Number(inputAmount) > Number(usdcBalance / 1e6)) {
      toast.error("Insufficient USDC Balance");
      return;
    }
    setLoading(true);

    // try {

    // } catch (err) {

    // }

    const localReferrer = localStorage.getItem("referrer");

    let isLocalValid = true;

    if (!localReferrer || !Web3.utils.isAddress(localReferrer)) {
      isLocalValid = false;
    }
    const referrerAddress = isLocalValid
      ? localReferrer
      : CONFIG.DEFAULT_REFERRER;
    const usdcAmount = Number(inputAmount) * 1e6;

    try {
      await presaleContract.methods
        .participate(usdcAmount, referrerAddress)
        .send({
          from: wallet.account,
        });

      toast.success("Successfully Participated In Presale!");
       loadContractData()
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const getBonus = () => {
    let total = inputAmount * tokenPrice;
    let bonus = (total * 2.5) / 100;
    return bonus;
  };

  const getTotal = () => {
    let total = inputAmount * tokenPrice;
    let bonus = getBonus();

    return total + bonus;
  };

  const copyMyReferrerLink = () => {
    const myLink = `${window.location.origin}?referrer=${wallet.account}`;

    const el = document.createElement("textarea");
    el.value = myLink;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("Copied Your Referrer Link!");
  };
  return (
    <StyledCard>
      <InnerCard>
        {wallet.account ? (
          <div style={{ justifyContent: "center", margin: "4px" }}>
            <Text Text={`Wallet: ${wallet.account}`} fw="bolder" />
            <Text Text={`USDC balance: ${Number(usdcBalance) / 1e6}`} />
          </div>
        ) : null}
        <Bar
          maxTokens={CONFIG.MAX_PRESALE_TOKENS}
          tokensSold={totalTokensSold}
        />
        <Amount
          tokenPrice={tokenPrice}
          value={inputAmount}
          onInputAmountChanged={(e) => {
            console.log("qwer", e);
            setInputAmount(e);
          }}
        />
        <Total
          isApproved={isApproved}
          isParticipationOpen={isParticipationOpen}
          isLoading={isLoading}
          bonus={getBonus()}
          total={getTotal()}
          onClickPurchase={handleonPurchase}
        />
        <Button
          Text={"Copy Your Referrer Link"}
          lightBorder
          bg=""
          nav
          m={"10px"}
          onClick={() => {
            copyMyReferrerLink();
          }}
        />
      </InnerCard>
    </StyledCard>
  );
};

export default Card;
