import React from 'react'
import Image from 'next/image'


export default function SecretariatCard(props) {

    return (
        <div className="mt-10 mb-20">
            <div className="p-2 h-[300px]  w-[350px] ">

                <div className=' relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[200px] rounded-t-xl'>
                    <Image className='absolute '
                        src="/images/image-14.svg"
                        width={850}
                        height={500}
                        alt="char images"
                    />
                </div>

                <div className='bg-white h-[180px] justify-center m-auto rounded-b-xl text-center'>
                    <h2 className="text-2xl mb-2 pt-10 font-bold">{props.name}</h2>
                    <h4 className=" text-sm mb-2 mt-10 pt-15 text-2xl">{props.position}</h4>

                    {/* <p className="text-lg  pt-4">{props.description}</p> */}

                </div>

            </div>

        </div>
    )
}