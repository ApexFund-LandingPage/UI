import React, { useState, useEffect } from "react";
import { StyledCard, InnerCard, Desktop, Mobile } from "./StyledCard";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { Flex } from "../buy/components/Flex";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import MobileRow from "./components/MobileRow";
import { useWallet } from "use-wallet";
import Web3 from "web3";
import CONFIG from "../../config";
import LendingABI from "../../config/ABI/LendingContract.json";
import LendingStaking from "../../config/ABI/LendingStaking.json";
import toast from "react-hot-toast";

const Card = () => {
  const wallet = useWallet();

  const [lendingContract, setLendingContract] = useState();
  const [stakingContract, setStakingContract] = useState();

  const [isInitialized, setInitialized] = useState(false);

  const [loading, setLoading] = useState(false);

  const [isLoanEnabled, setLoanEnabled] = useState(false);
  const [loanableAmount, setLoanableAmount] = useState(0);
  const [isLoanTaken, setLoanTaken] = useState(false);
  const [interestIncurred, setInterestIncurred] = useState(0);

  const [interestRate, setInterestRate] = useState(0);

  const [interestFreeDays, setInterestFreeDays] = useState(0);

  const initializeContracts = async () => {
    const web3 = new Web3(wallet.ethereum ? wallet.ethereum : CONFIG.RPC);
    const _lendingContract = new web3.eth.Contract(
      LendingABI,
      CONFIG.HBTLending
    );

    const _stakingContract = new web3.eth.Contract(
      LendingStaking,
      CONFIG.HBTLendingStaking
    );
    setStakingContract(_stakingContract);
    setLendingContract(_lendingContract);
  };
  const loadContractData = async () => {

    const _canTakeLoan = await lendingContract.methods.canTakeLoan().call();
    setLoanEnabled(_canTakeLoan);

    console.log({_canTakeLoan})
    const _interestFreeDays = await lendingContract.methods
      .interestFreeDays()
      .call();

    
    console.log({_interestFreeDays}) 
    

    setInterestFreeDays(_interestFreeDays / CONFIG.ONE_DAY);
    const _interestRateAnnually = await lendingContract.methods
      .interestRateAnnually()
      .call();
    

    setInterestRate(Web3.utils.fromWei(_interestRateAnnually));

    if (wallet.account) {
      const userInfo = await stakingContract.methods
        .userInfo(wallet.account)
        .call();

      setLoanTaken(userInfo.hasTakenLoan);

      const _loanAbleAmount = userInfo.hasTakenLoan ? 0 : userInfo.amount;
      setLoanableAmount(_loanAbleAmount);

      if (userInfo.hasTakenLoan) {
        const _interestIncurred = await lendingContract.methods
        .getUserInterest(wallet.account, userInfo.amount)
        .call();
        setInterestIncurred(_interestIncurred);
      } else {
        setInterestIncurred(0);

        }
    }

    // if (!wallet.account) {
    //   return
    // }

    // const _hbtBalance = await hbtContract.methods.balanceOf(wallet.account).call();
    // const _xhbtBalance = await xhbtContract.methods.balanceOf(wallet.account).call();
    // const _stakingInfo = await stakingContract.methods.userInfo(wallet.account).call()
    // const _stakingApproved = await hbtContract.methods.allowance(wallet.account, CONFIG.HBTLendingStaking).call()

    // const _pendingRewards = await rewardManagerContract.methods.rewards(wallet.account).call();
    // setPendingReward(_pendingRewards)

    // setStakingApproved(Number(_stakingApproved) > 0)
    // setStakingInfo(_stakingInfo)
    // setHBTBalance(_hbtBalance)
    // setxHBTBalance(_xhbtBalance)
    setInitialized(true);
  };



  const handleTakeLoan = async () => {
    await lendingContract.methods.takeLoan().send({ from: wallet.account })
    toast.success("Loan Taken")
    loadContractData()
  }

  const handleRepay = async () => {
    await lendingContract.methods.repayLoan().send({ from: wallet.account })
    toast.success("Loan Repaid")
    loadContractData()
  }

  const handleLoanButtonClick = async () => {
    setLoading(true)
    try {
      
      if (isLoanTaken) {
        await handleRepay()
      } else if(isLoanEnabled) {
        await handleTakeLoan()
      }
    } catch (err) {
      
    }

    setLoading(false)

  }

  useEffect(() => {
    initializeContracts();
    const interval = setInterval(() => {
      initializeContracts();
    }, 4000);
    return () => clearInterval(interval);
  }, [wallet.account, wallet.ethereum]);

  useEffect(() => {
    if (lendingContract) {
      loadContractData();
    }
  }, [wallet.account, lendingContract]);

  const ConnectWalletView = () => {
    return (
      <>
        <Heading
          Text="Please Connect Your Wallet"
          size="40px"
          faktumFont
          ls="0.1rem"
          lg="35px"
          xm="27px"
          ms="27px"
          m="0 0 1rem 0"
        />

        <Button
          Text="Connect Wallet"
          onClick={() => {
            wallet.connect();
          }}
        />
      </>
    );
  };


  const loanButtonText = () => {
    if (isLoanTaken) {
      return "Repay Loan"
    } else {
      if (isLoanEnabled) {
        return "Take Loan"

      } else {
        return "Loan Disabled"
      }
    }
  }
  return isInitialized ? (
    <>
      <Desktop>
        <StyledCard>
          <InnerCard>
            <Heading
              Text="Lending/Borrowing"
              size="40px"
              faktumFont
              ls="0.1rem"
              lg="35px"
              xm="27px"
              ms="27px"
            />
            <Flex style={{ justifyContent: "center", margin: "1.5rem 0 0 0" }}>
              <Heading regular Text="Loan Period: " size="24px" />
              <Heading
                Text={isLoanEnabled ? "OPEN" : "CLOSED"}
                gradient
                size="32px"
                faktumFont
                ls="0.1rem"
                m="0 0 0 0.5rem"
              />
            </Flex>
            <FirstRow
              loanableAmount={loanableAmount}
              isLoanTaken={isLoanTaken}
            />
            <SecondRow
              interestIncurred={interestIncurred}
              interestRate={interestRate}
              interestFreeDays={interestFreeDays}
            />
            {wallet.account ? (
              <Button Text={loanButtonText()} m="2rem 0 0 0"
                onClick={() => { handleLoanButtonClick() }} />
            ) : (
              ConnectWalletView()
            )}
          </InnerCard>
        </StyledCard>
      </Desktop>

      <Mobile>
        <Heading
          Text="LENDING/BORROWING"
          size="40px"
          faktumFont
          ls="0.1rem"
          lg="35px"
          xm="27px"
          ms="27px"
          m="0 0 1rem 0"
        />
        <StyledCard>
          <InnerCard>
            <Flex style={{ justifyContent: "center", flexDirection: "column" }}>
              <Heading
                regular
                Text="Loan Period: "
                size="24px"
                lg="22px"
                xm="20px"
                ms="18px"
              />
              <Heading
                Text={isLoanEnabled ? "OPEN" : "CLOSED"}
                gradient
                size="32px"
                lg="30px"
                xm="28px"
                ms="26px"
                faktumFont
                ls="0.1rem"
                m="0 0 0 0.5rem"
              />
            </Flex>
            <MobileRow />
            {!wallet.account ? (
              ConnectWalletView()
            ) : (
              <Button Text={loanButtonText()}  m="2rem 0 0 0" onClick={()=>{handleLoanButtonClick()}} />
            )}
          </InnerCard>
        </StyledCard>
      </Mobile>
    </>
  ) : null;
};

export default Card;
