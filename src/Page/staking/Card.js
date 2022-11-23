import React,{useState,useEffect} from 'react'
import { StyledCard, InnerCard, Desktop, Mobile } from '../lending/StyledCard'
import Balance from './components/Balance'
import BottomRow from './components/BottomRow'
import Heading from '../../components/Heading/Heading'
import ButtonContainer from './components/Button'
import StakeAmount from './components/StakeAmount'
import { useWallet } from 'use-wallet'
import Button from '../../components/Button/Button'
import Web3 from "web3";
import CONFIG from "../../config";
import IERC20 from "../../config/ABI/ERC20.json"

import RewardManager from "../../config/ABI/RewardManager.json"

import LendingStaking from "../../config/ABI/LendingStaking.json"
import toast from 'react-hot-toast'


const Card = () => {
  const wallet = useWallet()

  const [hbtBalance, setHBTBalance] = useState(0)
  const [xHBTBalance,setxHBTBalance] = useState(0)

  const [ isStakeMode,setStakeMode] = useState(true)
  const [stakingInfo,setStakingInfo] = useState()
  const [hbtContract, setHBTContract] = useState();
  const [xhbtContract, setxHBTContract] = useState();
  const [rewardManagerContract, setRewardManagerContract] = useState();

    const [pendingRewards,setPendingReward ] = useState(0)
  const [isInitialized, setInitialized] = useState(false);
  const [stakingContract, setStakingContract] = useState()
  const [hasApprovedStaking, setStakingApproved] = useState()
  const [stakingInput, setStakingInput] = useState(0)
  
  const [loading, setLoading] = useState(false);


  const initializeContracts = async () => {

  
    const web3 = new Web3(wallet.ethereum ? wallet.ethereum : CONFIG.RPC);
    const _hbtToken = new web3.eth.Contract(
      IERC20,
      CONFIG.HolobetToken
    );

    const _xhbtToken = new web3.eth.Contract(
      IERC20,
      CONFIG.xHBTToken
    );
    

    const _stakingContract = new web3.eth.Contract(
      LendingStaking,
      CONFIG.HBTLendingStaking
    );

    const _rewardManager = new web3.eth.Contract(
      RewardManager,
      CONFIG.RewardManager
    );

    setRewardManagerContract(_rewardManager)
  


    setHBTContract(_hbtToken);
    setxHBTContract(_xhbtToken);
    setStakingContract(_stakingContract)
    setInitialized(true);
  };
  const loadContractData = async () => {
   
    if (!wallet.account) {
      return 
    }
   
    const _hbtBalance = await hbtContract.methods.balanceOf(wallet.account).call();
    const _xhbtBalance = await xhbtContract.methods.balanceOf(wallet.account).call();
    const _stakingInfo = await stakingContract.methods.userInfo(wallet.account).call()
    const _stakingApproved = await hbtContract.methods.allowance(wallet.account, CONFIG.HBTLendingStaking).call()
    
    const _pendingRewards = await rewardManagerContract.methods.rewards(wallet.account).call();
    setPendingReward(_pendingRewards)
    
    setStakingApproved(Number(_stakingApproved) > 0)
    setStakingInfo(_stakingInfo)
    setHBTBalance(_hbtBalance)
    setxHBTBalance(_xhbtBalance)

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
  const handleApprove = async() => {
    setLoading(true)
    try {
      await hbtContract.methods.approve(CONFIG.HBTLendingStaking,
        "10000000000000000000000000000000000000000000").send({ from: wallet.account })
      
      toast.success("Contract Approved")
      await loadContractData()
    } catch (err) {
      
    }
    setLoading(false)
  }

  const handleStake = async() => {
    setLoading(true)
    try {
      const finalStakingInput = Web3.utils.toWei(stakingInput.toString());
      await stakingContract.methods.deposit(finalStakingInput).send({ from: wallet.account })
      
      toast.success(`Staked ${stakingInput} $HBT`)
      await loadContractData()

    } catch (err) {
      
    }
    setLoading(false)
  }


  
  const handlWithdraw = async() => {
    setLoading(true)
    try {
      const finalStakingInput = Web3.utils.toWei(stakingInput.toString());
      await stakingContract.methods.withdraw(finalStakingInput).send({ from: wallet.account })
      
      toast.success(`Withdrawn ${stakingInput} $HBT`)
      await loadContractData()

    } catch (err) {
      
    }
    setLoading(false)
  }
 
  const handleMainButtonClick = async () => {
    if (isStakeMode) {
      if (hasApprovedStaking) {
        await handleStake()
      } else {
        await handleApprove()
      }
    } else {
      await handlWithdraw()
    }
  }
  

  return (
    <>
    <Mobile>
      <Heading Text="STAKING" 
        size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px" 
        m="0 0 1rem 0"
        />
    </Mobile>
    <StyledCard>
      <InnerCard>
        <Desktop>
          <Heading Text="Staking" 
            size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
          />
        </Desktop>
      
          {wallet.account ? <>  <Balance hbtBalance={hbtBalance}
            pendingRewards={pendingRewards}
            xHBTBalance={xHBTBalance} stakingInfo={stakingInfo} />
            <ButtonContainer onStakeModeEnabled={(isStakeMode) => {
              setStakeMode(isStakeMode)
            } } />
            <StakeAmount hasApprovedStaking={hasApprovedStaking}
              onClick={() => { handleMainButtonClick() }}
              stakedAmount={stakingInfo?stakingInfo.amount:0}
              onStakingInput={(input) => {
                setStakingInput(input)
              }}
              hbtBalance={hbtBalance} isStakeMode={isStakeMode} loading={loading} />
            <BottomRow stakingInfo={stakingInfo} /></>:ConnectWalletView()}
      </InnerCard>
    </StyledCard>
    </>
  )
}

export default Card