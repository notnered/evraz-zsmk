import hero from '../../../../public/hero/hero.jpg';
import HeroBlock from './HeroBlock';
import HeroSlider from './HeroSlider';

export default function Hero(){

    return (
        <header className='flex h-[30rem] relative heroBG w-full'>
            <HeroBlock />
            {/* <HeroSlider /> */}
        </header>
    )
}