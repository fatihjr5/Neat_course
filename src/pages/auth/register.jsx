import { AuthLayout } from '@/layout/auth';
import { Checkbox, Input } from 'antd';
import React from 'react';

import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link';

const Register = () => {
    return (
        <AuthLayout>
            <h5 className="text-center text-2xl font-bold mt-10">Register</h5>
            <section className="flex flex-col gap-y-3 w-72 mx-auto mt-7">
                <Input className='py-2' placeholder="Enter Your Name" />
                <Input className='py-2' placeholder="Enter Your Email" />
                <Input className='py-2' placeholder="Enter Your Password" />
                <Checkbox>I agree with our terms and condition</Checkbox>
                <button className="py-2 rounded-md ring-1 ring-[#7000FD] text-sm font-medium text-[#7000FD] hover:bg-[#7000FD] hover:text-white ease-in duration-200">
                    Continue
                </button>
            </section>
            <p className="text-xs text-gray-400 text-center my-3">or</p>
            <section className="flex flex-col gap-y-3 w-72 mx-auto">
                <button className="flex items-center gap-x-2 justify-center py-2 rounded-md ring-1 ring-gray-400 text-sm font-medium">
                    <FcGoogle/>
                    <span>Register with Google</span>
                </button>
                <button className="flex items-center gap-x-2 justify-center py-2 rounded-md ring-1 ring-gray-400 text-sm font-medium">
                    <FaFacebookSquare className='text-blue-800'/>
                    <span>Register with Facebook</span>
                </button>
                <Link href="/auth/login" className='text-center text-xs font-normal text-gray-500 mt-1'>Already have account? <span className="font-medium text-[#7000FD]">Login</span></Link>
            </section>
        </AuthLayout>
    );
}

export default Register;
