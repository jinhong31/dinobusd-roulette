import { useCallback, useEffect, useState } from "react";
import web3ModalSetup from "./../helpers/web3ModalSetup";
import Web3 from "web3";
import getAbi from "../Abi";
import getAbiBusd from "../Abi/busd";
import Logo from "./Logo.js";
import Table from "./Tablecell.js";
import Bets from "./Bets.js";
import Navbar from './Navbar';
// import "./Style.css";
import Detail from "./UserDetail";
// import '../components/Cycle.css';
import { Wheel } from 'react-custom-roulette';


/* eslint-disable no-unused-vars */
const web3Modal = web3ModalSetup();

const Interface = () => {
    const [Abi, setAbi] = useState();
    const [AbiBusd, setAbiBusd] = useState();
    const [web3, setWeb3] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const [injectedProvider, setInjectedProvider] = useState();
    const [refetch, setRefetch] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [current, setCurrent] = useState(null);
    const [connButtonText, setConnButtonText] = useState("CONNECT");
    const [allowance, setAllowance] = useState(0);
    const [balance, setBalance] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalBuy, setTotalBuy] = useState(0);
    const [time, setTime] = useState(0);
    const [liquidity, setLiquadity] = useState(0);
    const [winner, setTotalWinner] = useState(0);
    const [betarry, setBetarry] = useState([]);
    const [betnumber, setBetNumer] = useState();
    const [bet, setBet] = useState(null);
    const [number, setNumber] = useState(null);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState();

    const [refLink, setRefLink] = useState(
        "https://roulette.dinobusd.finance/?ref=0x0000000000000000000000000000000000000000"
    );
    const data = [
        { option: '0' },
        { option: '1' },
        { option: '2' },
        { option: '3' },
        { option: '4' },
        { option: '5' },
        { option: '6' },
        { option: '7' },
        { option: '8' },
        { option: '9' },
        { option: '10' },
        { option: '11' },
        { option: '12' },
        { option: '13' },
        { option: '14' },
        { option: '15' },
        { option: '16' },
        { option: '17' },
        { option: '18' },
        { option: '19' },
        { option: '20' },
        { option: '21' },
        { option: '22' },
        { option: '23' },
        { option: '24' },
        { option: '25' },
        { option: '26' },
        { option: '27' },
        { option: '28' },
        { option: '29' },
        { option: '30' },
        { option: '31' },
        { option: '32' },
        { option: '33' },
        { option: '34' },
        { option: '35' },
        { option: '36' },
    ]
    const color = [
        "#ff4000",
        "#40ff00",
    ]
    const [randomnum, setRandom] = useState("");
    const [spin, setSpin] = useState(false);
    const [pendingMessage, setPendingMessage] = useState("");

    const queryParams = new URLSearchParams(window.location.search);
    let DefaultLink = queryParams.get("ref");

    if (DefaultLink === null) {
        DefaultLink = "0x857Bf8867a41441653134500D6c6457Ee3cc1934";
        console.log("Default Ref", DefaultLink);
    }

    const logoutOfWeb3Modal = async () => {
        await web3Modal.clearCachedProvider();
        if (
            injectedProvider &&
            injectedProvider.provider &&
            typeof injectedProvider.provider.disconnect == "function"
        ) {
            await injectedProvider.provider.disconnect();
        }
        setIsConnected(false);

        window.location.reload();
    };
    const loadWeb3Modal = useCallback(async () => {
        const provider = await web3Modal.connect();
        setInjectedProvider(new Web3(provider));
        const acc = provider.selectedAddress
            ? provider.selectedAddress
            : provider.accounts[0];

        const short = shortenAddr(acc);

        setWeb3(new Web3(provider));
        setAbi(await getAbi(new Web3(provider)));
        setAbiBusd(await getAbiBusd(new Web3(provider)));
        setAccounts([acc]);
        setCurrent(acc);
        //     setShorttened(short);
        setIsConnected(true);

        setConnButtonText(short);

        provider.on("chainChanged", (chainId) => {
            console.log(`chain changed to ${chainId}! updating providers`);
            setInjectedProvider(new Web3(provider));
        });

        provider.on("accountsChanged", () => {
            console.log(`account changed!`);
            setInjectedProvider(new Web3(provider));
        });

        // Subscribe to session disconnection
        provider.on("disconnect", (code, reason) => {
            console.log(code, reason);
            logoutOfWeb3Modal();
        });
        // eslint-disable-next-line
    }, [setInjectedProvider]);

    useEffect(() => {
        setInterval(() => {
            setRefetch((prevRefetch) => {
                return !prevRefetch;
            });
        }, 2000);
    }, []);

    useEffect(() => {
        if (web3Modal.cachedProvider) {
            loadWeb3Modal();
        }
        // eslint-disable-next-line
    }, []);

    const shortenAddr = (addr) => {
        if (!addr) return "";
        const first = addr.substr(0, 3);
        const last = addr.substr(38, 41);
        return first + "..." + last;
    };

    useEffect(() => {
        const Contract = async () => {
            if (isConnected && Abi) {
                // get status data
                let getStatus = await Abi.methods.getStatus(current).call();
                console.log(getStatus);
                setTotalUsers(getStatus[0]);
                setTotalBuy(getStatus[1] / 10e17);
                let _start = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(getStatus[2] + "000")
                setTime(_start);
                setLiquadity(getStatus[3] / 10e17);
                setTotalWinner(getStatus[4] / 10e17);
                // getting balance from BUSD contract
                let balance = await AbiBusd.methods.balanceOf(current).call();
                setBalance(balance / 10e17);

                const refLink = "https://roulette.dinobusd.finance/?ref=" + current;
                setRefLink(refLink);
            }
        };

        Contract();
        // eslint-disable-next-line
    }, [refetch]);

    useEffect(() => {
        // leave as it
        const Allowance = async () => {
            if (isConnected && AbiBusd) {
                let _contract = "0x5fCAE6A4a062BFBB9BBAF8c14f3a9f833020D683";
                let allow = await AbiBusd.methods.allowance(current, _contract).call();
                setAllowance(allow);

                let _balance = await AbiBusd.methods.balanceOf(current).call();
                setBalance(_balance / 10e17);
            }
        };
        Allowance();
        // eslint-disable-next-line
    }, [refetch]);

    // buttons

    const Approve = async (e) => {
        // leave as it
        e.preventDefault();
        if (isConnected && AbiBusd) {
            setPendingMessage("Approving BUSD");
            let _contract = "0x5fCAE6A4a062BFBB9BBAF8c14f3a9f833020D683";
            let _amount = "99999999999999999999999999999999999999999999999999";
            await AbiBusd.methods.approve(_contract, _amount).send({
                from: current,
            });
            setPendingMessage("Successfully Approved");
        } else {
            console.log("connect wallet");
        }
    };

    const cashOut = async (e) => {
        e.preventDefault();
        if (isConnected && Abi) {
            setPendingMessage("Cashing out");
            await Abi.methods.cashOut().send({
                from: current,
            });
            setPendingMessage("Successfully Cashout");
        }
    }

    const spinit = async () => {
        if (isConnected && Abi) {
            setPendingMessage("Spining");
            let data = await Abi.methods.spinWheel().send({
                from: current,
            });
            setPrizeNumber(data.events.RandomNumber.returnValues[0]);
            setMustSpin(true);
            setPendingMessage("successfully spinned");

        }
    }
    const Selector = async () => {
        // selecting number value should be remain same just change the number and bet data from inputs.
        // e.preventDefault();
        console.log(isConnected);
        console.log(Abi);
        if (isConnected && Abi) {
            setPendingMessage("Selecting");
            let value = "1000000000000000000";
            let data = await Abi.methods.bet(DefaultLink, value, number, bet).send({
                from: current,
            });
            setBetarry(prevarray => [...prevarray, betnumber]);
        }
    };

    const getcellbets = (celldata) => {
        if (celldata.cell_data / 1) {
            setNumber(celldata.cell_data);
            setBet(5);
            setBetNumer(celldata.cell_data);

        }
        else {
            setNumber(celldata.cell_num);
            setBet(celldata.cell_type);
            setBetNumer(celldata.cell_data);

        }
    };

    useEffect(() => {

        Selector();
        // eslint-disable-next-line
    }, [number, bet]);


    const resetuserbets = () => {
        setBetarry([]);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row" id="logo-section">
                    <div className="col">
                        <Logo />
                    </div>
                    <div className="col" id="Navbar-sec">
                        <Navbar btnclick={loadWeb3Modal} btntext={connButtonText} liq={liquidity} connectStatus={isConnected} />
                    </div>
                </div>
                <div className="row" id="detail-sec">
                    <div className="col">
                        <Detail balance={balance} tusers={totalUsers} tbuy={totalBuy} time={time} winer={winner} />
                    </div>
                </div>
                <div className="row" id="table-section">
                    <div className="col-sm-4" id="wheelsec">
                        <div className='rou-wheel'>
                            <Wheel
                                mustStartSpinning={mustSpin}
                                prizeNumber={prizeNumber}
                                data={data}
                                backgroundColors={color}
                                textDistance={85}
                                innerBorderColor={"#eb961e"}
                                innerBorderWidth={5}
                                outerBorderWidth={5}
                                outerBorderColor={"#eb961e"}
                                radiusLineColor={'yellow'}
                                radiusLineWidth={1}
                                innerRadius={55}


                                onStopSpinning={() => {
                                    setMustSpin(false)
                                }}
                            />
                            {allowance > 0 ? <>
                                <button className="btn btn-warning btn-lg" onClick={spinit}>Spin</button>
                            </> : <>
                                <button className="btn btn-warning btn-lg" onClick={Approve}>Approve</button>
                            </>}
                            <br /><br />
                            <h3 style={{ color: "#fff" }}>Cash Out</h3>
                            <button className="btn btn-warning btn-lg" onClick={cashOut}>CashOut</button>

                        </div>
                        {/* {allowance === "0" ? (
            <>
            <div className="Approve-btn">
              <button type="button" className="btn btn-warning" onClick={Approve}>Approve</button>
              </div>
            </>
          ) : (
            <>
             <button className="btn btn-warning btn-lg" onClick={spinit}>Spin</button>
            </>
          )}  */}

                    </div>
                    <div className="col" id="tablesec">
                        <Table getbets={getcellbets} /> <br />
                        <h2 style={{ color: "#fff" }}>You can placed in 1 time Maximum 5 bets total 5 BUSD</h2>
                    </div>
                </div>
                <div className="row" id="res-section">
                    <div className="col-sm-4" id="user-bets">
                        <Bets userbets={betarry} resetHandler={resetuserbets} />
                    </div>
                    <div className="col">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h1>Referral</h1>
                                    <p>Your Referral link, Use your referral link and get 4% of the person bet.</p>
                                    <input type="text" value={refLink} style={{ width: "80%", backgroundColor: "#f5b547" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Interface;
