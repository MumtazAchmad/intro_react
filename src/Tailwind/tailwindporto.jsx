export default function Portofolio(){
    return(
        <div>
            <h1 className='text-9xl text-red-900'>Nama Saya Mumtaz Achmad Puntadewa</h1>
            <div className='flex justify-center item-center bg-gray-100 h-[300px]'>
            <div className='bg-blue-300 w-[100px] h-[100px] hover:bg-red-300]'> Box - 01 </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
            <div className='bg-blue-300 h-[100px]'> Box - 02 </div>
            <div className='bg-blue-300 h-[100px]'> Box - 03 </div>
            <div className='bg-blue-300 h-[100px]'> Box - 04 </div>
            <div className='bg-blue-300 h-[100px]'> Box - 05 </div>
            </div>

            <div clasName='flex justify-center'>
                <h1 className='test-xl text-green-300 lg:text-red-300'>Responsive</h1>
            </div>
        </div>
    )
}