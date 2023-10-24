import { Header } from '../header/Header';
import './blog.css';
import FontAwesome from 'react-fontawesome';

export function Blog() {

    return (
        <>
            <Header />
            <div className='justify-c blog'>
                <h2 className='justify-c blog-title'>Work in progress</h2>
                <FontAwesome
                    className='spinner'
                    name='spinner'
                    size='2x'
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </div>
        </>
    );
}