import './Homepage.css';
import homeimage from '../../assets/homeimage.png';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <>
            <div className="mainHome">
                <div className="description">
                    <h1 className='Headline'>CLOTHING MADE FOR YOU!!</h1>
                    <p className='Tag'>Trending collections for everyone</p>
                    <button className='Shopnow-btn'>Shop Now</button>
                </div>
                <img src={homeimage} alt='homeimage'/>
            </div>
            <div className='Categories'>
                <div className='Category'>
                    <img className='catimage' alt='menimage'
                    src='https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg'/>
                    <Link to={'/men'}>
                    <button className='catbutton'>Men's</button>
                    </Link>
                </div>
                <div className='Category'>
                    <img className='catimage' alt='menimage'
                    src='https://img3.junaroad.com/uiproducts/19698550/pri_175_p-1681301974.jpg'/>
                    <Link to={'/women'}>
                    <button className='catbutton'>Women's</button>
                    </Link>
                </div>
                <div className='Category'>
                    <img className='catimage' alt='menimage'
                    src='https://img.freepik.com/free-photo/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_155003-21555.jpg'/>
                    <Link to={'/kids'}>
                    <button className='catbutton'>Kids</button>
                    </Link>
                </div>
            </div>
        </>
    )
}