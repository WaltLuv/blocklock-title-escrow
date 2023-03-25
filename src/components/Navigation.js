import { ethers } from 'ethers';
import logo from '../assets/logo.png';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <ul className='nav__links'>
                <li><a href="/#">Syndicate</a></li>
                <li><a href="/#">Fund</a></li>
                <li><a href="/#">Buy</a></li>
                <li><a href="/#">Sell</a></li>
                <li><a href="/#">Rent</a></li>
                <li><a href="/#">Pay</a></li>
            </ul>

            <div className='nav__brand'>
                <img src={logo} alt="Logo" />
                {/*<h1>Bloclock</h1>*/}
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect Wallet
                </button>
            )}
        </nav>
    );
}

export default Navigation;