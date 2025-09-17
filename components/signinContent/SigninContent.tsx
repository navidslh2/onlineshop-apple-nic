import React from 'react'
import TextTitle from '../ui/TextTitle'

interface Props{
  page:string
  email: string
  password: string
  inputValueHandler: (e:React.FormEvent)=> void
  error: string | null
  handelLogin:(e:React.FormEvent)=>void
}

const SigninContent = ({page, email, password, inputValueHandler, error, handelLogin}:Props) => {
  return (
        <div className="m-auto w-full max-w-xl ">
          <form
            className="flex flex-col gap-5 mx-10"
            onSubmit={handelLogin}
            noValidate
          >
            <TextTitle className="m-auto text-md">{page === "email"? "ورود یا ثبت نام" : "ورود با رمز عبور"}</TextTitle>
            <div className="relative">
              <input
                type={page === "email"? "email":"password"}
                value={page === "email"? email: password}
                onChange={inputValueHandler}
                className="border border-gray-300 p-3 rounded-sm w-full peer"
              />
              <span
                className={`absolute bg-gray-100 px-2 text-gray-500 z-50 top-3 right-3 peer-placeholder-shown:top-2 peer-focus:-top-3 hoverEffect ${
                  email || password ? "!-top-3" : "" }`}
              >
                {page === "email"? "ایمیل" : "پسورد"}
              </span>
            </div>
            {error && <p className="text-red-400">{error}</p>}
            <button
              type="submit"
              className="bg-blue-700 p-2 rounded-sm text-white hover:bg-blue-500 hoverEffect"
            >
               {page === "email"? "مرحله بعد" : "ورود"}
            </button>
          </form>
        </div>
  )
}

export default SigninContent
