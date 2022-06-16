import Nike from '../../assets/collections/nike-logo.svg';
import Adidas from '../../assets/collections/adidas-logo.svg';
import Puma from '../../assets/collections/puma-logo.svg';
import Reebok from '../../assets/collections/reebok-logo.svg';
import Vans from '../../assets/collections/vans-logo.svg';
import Jordan from '../../assets/collections/jordan-logo.svg';

const CollectionsCards = () => {
  return (
    <div className='collections-wrapper flex flex-wrap mt-8 justify-center'>
      <div
        before='Nike'
        className='w-[15rem] xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 lg:ml-8 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Nike} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      <div
        before='Adidas'
        className='w-[15rem] xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 lg:ml-8 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Adidas} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      <div
        before='Puma'
        className='w-[15rem] xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 lg:ml-8 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Puma} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      <div
        before='Reebok'
        className='w-[15rem] xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 lg:ml-8 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Reebok} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      <div
        before='Vans'
        className='w-[15rem] xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 lg:ml-8 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Vans} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      <div
        before='Jordan'
        className='w-[15rem] xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 lg:ml-8 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Jordan} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
    </div>
  );
};

export default CollectionsCards;
