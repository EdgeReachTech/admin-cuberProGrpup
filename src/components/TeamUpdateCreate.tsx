'use client';
import { TeamUpdateCreateProps } from '@/lib/type';
import { useEffect, useState } from 'react';
import { BiLeftArrow } from 'react-icons/bi';

const TeamUpdateCreate = ({
    teamMember,
    index,
    showFields,
    setShowFields,
    setIndex,
}: TeamUpdateCreateProps) => {
    const [input, setInput] = useState({
        name: "",
        role: "",
        image: "",
        linkedInProfile: "",
    });

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(input)
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        if (teamMember) {
            setInput({
                name: teamMember.name || "",
                role: teamMember.role || "",
                image: teamMember.image || "",
                linkedInProfile: teamMember.linkedInProfile || "",
            });
        }
    }, [teamMember]);
    return (
        <>
            {/* Form start */}
            {showFields && <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-end'>
                <div className='bg-white p-10 h-screen overflow-y-auto w-full md:w-fit'>
                    <div className='flex items-center justify-between px-5 pb-10'>
                        <button onClick={() => setShowFields(false)} className='bg-black text-white px-4 py-[3px] rounded-lg flex items-center gap-2 cursor-pointer'><BiLeftArrow /> Back</button>
                        <h1 className='font-bold text-xl'>Create new team</h1>
                    </div>
                    <form onSubmit={onSubmit} className="max-w-4xl m-auto text-center space-y-5">
                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>Name</p>
                            <input
                                type="text"
                                name="name"
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>Role</p>
                            <input
                                type="text"
                                name="role"
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>Image</p>
                            <input
                                type="text"
                                name="image"
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>LinkedIn Profile</p>
                            <input
                                type="text"
                                name="linkedInProfile"
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-[600px] bg-blue-800 text-white py-2 rounded cursor-pointer text-lg"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>}
            {/* Form end */}

            {/* Form update start */}
            {showFields && teamMember && index && <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-end'>
                <div className='bg-white p-10 h-screen overflow-y-auto w-full md:w-fit'>
                    <div className='flex items-center justify-between px-5 pb-10'>
                        <button onClick={() => {
                            setShowFields(false)
                            setIndex(0);
                        }} className='bg-black text-white px-4 py-[3px] rounded-lg flex items-center gap-2 cursor-pointer'><BiLeftArrow /> Back</button>
                        <h1 className='font-bold text-xl'>Update team</h1>
                    </div>
                    <form onSubmit={onSubmit} className="max-w-4xl m-auto text-center space-y-5">
                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>Name</p>
                            <input
                                type="text"
                                name="name"
                                value={input.name}
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>Role</p>
                            <input
                                type="text"
                                name="role"
                                value={input.role}
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>Image</p>
                            <input
                                type="text"
                                name="image"
                                value={input.image}
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                            <p className='font-bold min-w-[100px] text-start'>LinkedIn Profile</p>
                            <input
                                type="text"
                                name="linkedInProfile"
                                value={input.linkedInProfile}
                                required
                                onChange={handleOnChange}
                                className="outline-none block w-full px-3 py-2 mb-2 bg-[#D9D9D9] border border-transparent rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-[600px] bg-blue-800 text-white py-2 rounded cursor-pointer text-lg"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>}
            {/* Form update end */}
        </>
    )
}

export default TeamUpdateCreate;