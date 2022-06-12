import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from '../src/Icon';

const bottomTextList = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Imprint',
  'Accessibility',
  'Ads info',
  'Blog',
  'Status',
  'Careers',
  'Brand Resources',
  'Advertising',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
  '© 2022 Twitter, Inc.',
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/home');

    setTimeout(() => {
      router.push('/home');
    }, 2000);
  }, [router]);

  return (
    <div>
      <div className="flex">
        <div className="bg-twitter-home bg-center bg-no-repeat w-[735.17px] h-[733px] flex justify-center items-center">
          <Icon name="twitter" color="#fff" width="735.17px" height="380px" />
        </div>
        <div className="py-7 px-9">
          <Icon name="twitter" color="#1D9BF0" width="45px" height="57px" />
          <h3 className="font-bold text-[64px] tracking-wide mt-11">
            Happening now
          </h3>
          <h3 className="font-bold text-[31px] mt-10">Join Twitter today.</h3>
          <div className="mt-7">
            <div className="bg-white rounded-3xl border-[1px] w-[300px] h-[40px] flex justify-center items-center space-x-2  hover:bg-[#E6E6E6] transition-all cursor-pointer">
              <Icon name="google" size="20px" />
              <p className="text-sm font-semibold text-[#202020]">
                Sign up with Google
              </p>
            </div>
            <div className="bg-white rounded-3xl border-[1px] w-[300px] h-[40px] flex justify-center items-center space-x-2 mt-3 hover:bg-[#E6E6E6] transition-all cursor-pointer">
              <Icon name="apple" size="20px" color="rgb(15, 20, 25)" />
              <p className="text-sm font-semibold text-black">
                Sign up with Apple
              </p>
            </div>
            <div className="flex items-end w-[300px] mt-2 justify-center space-x-2">
              <hr className="w-[140px] mb-2" />
              <p>or</p>
              <hr className="w-[140px] mb-2" />
            </div>
            <div className="bg-twitter rounded-3xl border-[1px] w-[300px] h-[40px] flex justify-center items-center mt-3 hover:bg-[#1A8CD8]  transition-all cursor-pointer">
              <p className="font-semibold text-white">
                Sign up with phone or email
              </p>
            </div>
            <p className="text-xs w-[300px] mt-1">
              By signing up, you agree to the
              <a href="https://twitter.com/en/tos" className="text-twitter">
                {' '}
                Terms of Service
              </a>{' '}
              and
              <a href="https://twitter.com/en/privacy" className="text-twitter">
                {' '}
                Privacy Policy,
              </a>{' '}
              including
              <a
                href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                className="text-twitter"
              >
                {' '}
                Cookie Use.
              </a>{' '}
            </p>
            <p className="text-black text-lg font-semibold mt-16">
              Already have an account?
            </p>
            <div
              className="bg-white rounded-3xl border-[1px] w-[300px] h-[40px] flex justify-center items-center mt-3 hover:bg-[#E8F5FD] transition-all cursor-pointer"
              onClick={() => router.push('/home')}
            >
              <p className="font-semibold text-twitter">Sign in</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="h-[72px] w-[1349px] px-10 flex flex-wrap justify-center mt-3 space-x-4">
        {bottomTextList.map((t, i) => (
          <li
            className="text-xs min-w-max font-semibold hover:underline cursor-pointer text-[#536471]"
            key={i}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
