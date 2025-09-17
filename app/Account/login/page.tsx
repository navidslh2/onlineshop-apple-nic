"use client";
import TextTitle from "@/components/ui/TextTitle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import SigninContent from "@/components/signinContent/SigninContent";
import Credentials from "next-auth/providers/credentials";
import { fetchEmailCheck } from "@/lib/api";

const Login = () => {
  const [page, setPage] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  

  const inputValueHandler = (e)=>{
    if (page === "email") {
      setEmail(e.target.value)
    }else setPassword(e.target.value)
  }

  const validateEmail = (email: string): boolean => {
    return /^([a-zA-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$/.test(
      email
    );
  };

  const handelemail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validateEmail(email)) {
      setError("فرمت ایمیل صحیح نیست");
      return;
    }
    const res = await fetchEmailCheck(email)
    if(res) setPage("password")
    if(!res) router.push("/Account/register")
  };

  const handelPassword = async (e: React.FormEvent) =>{
    e.preventDefault()
    setError(null )
    if (password.trim().length < 6){
      setError("رمز عبور باید حداقل 6 کارکتر باشد")
      return
    }
    const res = await signIn("credentials", {redirect:false, email, password})
    if(res?.error){
      setError("ایمیل یا رمز عبور نادرست است")
      setPassword("")
    }else{
      router.push("/")
    }
  }
  return (
    <div className="mt-15 flex flex-col gap-8">
      <div className="flex items-center justify-center relative">
        <svg
          id="b"
          width="250px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1875.9 1877.7"
        >
          <g id="main_circle">
            <circle cx="1038.9" cy="236.8" r="34.6" fill="#66b6c3"></circle>
            <circle cx="1216.6" cy="284.7" r="34.6" fill="#37badc"></circle>
            <circle cx="1374.6" cy="377.5" r="34.6" fill="#07bdeb"></circle>
            <circle cx="1506.2" cy="507.7" r="34.6" fill="#19baeb"></circle>
            <circle cx="1599" cy="670.2" r="34.6" fill="#30a5eb"></circle>
            <circle cx="1649" cy="850.7" r="34.6" fill="#4f91ea"></circle>
            <circle cx="1646" cy="1037.5" r="34.6" fill="#7178e5"></circle>
            <circle cx="1600.2" cy="1215.2" r="34.6" fill="#9561e7"></circle>
            <circle cx="1506.5" cy="1376.2" r="34.6" fill="#dc3de5"></circle>
            <circle cx="1373.8" cy="1509.7" r="34.6" fill="#d93ae1"></circle>
            <circle cx="1034.5" cy="1647.7" r="34.6" fill="#ea2dc2"></circle>
            <circle cx="1213" cy="1600.7" r="34.6" fill="#e232d4"></circle>
            <circle cx="849" cy="1646.7" r="34.6" fill="#f22ea7"></circle>
            <circle cx="670" cy="1598.7" r="34.6" fill="#f8308e"></circle>
            <circle cx="509.5" cy="1505.9" r="34.6" fill="#fc4475"></circle>
            <circle
              cx="376"
              cy="1374.7"
              r="34.6"
              transform="translate(-497.45 248.53) rotate(-22.5)"
              fill="#ff5470"
            ></circle>
            <circle cx="285" cy="1214.7" r="34.6" fill="#ff626c"></circle>
            <circle cx="236.2" cy="1033.2" r="34.6" fill="#ff636c"></circle>
            <circle cx="233.2" cy="849.7" r="34.6" fill="#ff736e"></circle>
            <circle cx="284" cy="669.4" r="34.6" fill="#ff836f"></circle>
            <circle
              cx="377.8"
              cy="509.2"
              r="34.6"
              transform="translate(-166.1 183.34) rotate(-22.5)"
              fill="#ff9274"
            ></circle>
            <circle cx="508.5" cy="376.2" r="34.6" fill="#ffa478"></circle>
            <circle cx="670.4" cy="283.4" r="34.6" fill="#f6b080"></circle>
            <circle cx="849" cy="237.2" r="34.6" fill="#a0b6a9"></circle>
          </g>

          <g id="Second_circle">
            <circle cx="937.2" cy="310.1" r="30.8" fill="#90b9b8"></circle>
            <circle cx="772" cy="334.4" r="30.8" fill="#e2b994"></circle>
            <circle cx="622" cy="397.4" r="30.8" fill="#ffb584"></circle>
            <circle cx="493.8" cy="497.7" r="30.8" fill="#ffb784"></circle>
            <circle cx="396.1" cy="628.3" r="30.8" fill="#ff9d7d"></circle>
            <circle cx="334" cy="777.8" r="30.8" fill="#ff8878"></circle>
            <circle cx="312.5" cy="941.7" r="30.8" fill="#ff7c76"></circle>
            <circle cx="336" cy="1100.7" r="30.8" fill="#ff6f77"></circle>
            <circle cx="401.5" cy="1251.4" r="30.8" fill="#fd647a"></circle>
            <circle cx="499.5" cy="1380.2" r="30.8" fill="#fe5583"></circle>
            <circle cx="631" cy="1478.4" r="30.8" fill="#fb498f"></circle>
            <circle cx="782" cy="1538.7" r="30.8" fill="#fb3aaa"></circle>
            <circle cx="943.9" cy="1557.7" r="30.8" fill="#f538bb"></circle>
            <circle cx="1104.7" cy="1535.8" r="30.8" fill="#ee3dd2"></circle>
            <circle cx="1254.5" cy="1474.2" r="30.8" fill="#e64ae4"></circle>
            <circle cx="1383" cy="1375" r="30.8" fill="#e156ec"></circle>
            <circle cx="1482.5" cy="1243.7" r="30.8" fill="#b066e9"></circle>
            <circle cx="1543" cy="1091.7" r="30.8" fill="#6e8fe8"></circle>
            <circle cx="1562" cy="930.7" r="30.8" fill="#51a4e8"></circle>
            <circle cx="1541" cy="768.9" r="30.8" fill="#3cbbef"></circle>
            <circle cx="1475.8" cy="617.7" r="30.8" fill="#3abbef"></circle>
            <circle cx="1375.5" cy="489.7" r="30.8" fill="#29c2f0"></circle>
            <circle cx="1245.5" cy="391.2" r="30.8" fill="#33c3ed"></circle>
            <circle cx="1096.5" cy="330.1" r="30.8" fill="#61bdd1"></circle>
          </g>
          <g id="Third_Circle">
            <circle
              cx="931.5"
              cy="144.2"
              r="38.2"
              transform="translate(627.87 1036.55) rotate(-80.01)"
              fill="#86afa9"
            ></circle>
            <circle cx="1139" cy="169.7" r="38.2" fill="#4bb6cc"></circle>
            <circle cx="1327.2" cy="245.2" r="38.2" fill="#00baeb"></circle>
            <circle cx="1489.5" cy="369.2" r="38.2" fill="#00b9eb"></circle>
            <circle cx="1615.5" cy="530.2" r="38.2" fill="#00b8ea"></circle>
            <circle cx="1695" cy="719.5" r="38.2" fill="#319be9"></circle>
            <circle cx="1724" cy="924.7" r="38.2" fill="#5480ea"></circle>
            <circle cx="1622" cy="1317.2" r="38.2" fill="#a050e8"></circle>
            <circle cx="1697" cy="1128.2" r="38.2" fill="#7966e9"></circle>
            <circle cx="1497.5" cy="1483.2" r="38.2" fill="#cf3aea"></circle>
            <circle cx="1335.5" cy="1610.2" r="38.2" fill="#db31e2"></circle>
            <circle cx="1146.5" cy="1688.7" r="38.2" fill="#e227c7"></circle>
            <circle cx="942.5" cy="1716" r="38.2" fill="#ed24a8"></circle>
            <circle cx="741" cy="1690" r="38.2" fill="#f52390"></circle>
            <circle cx="550.5" cy="1613.2" r="38.2" fill="#f83174"></circle>
            <circle cx="386.8" cy="1490.2" r="38.2" fill="#ff4668"></circle>
            <circle cx="258.3" cy="1328.2" r="38.2" fill="#fe5562"></circle>
            <circle cx="180" cy="1139.7" r="38.2" fill="#ff6764"></circle>
            <circle cx="152" cy="935.4" r="38.2" fill="#ff7665"></circle>
            <circle cx="173.2" cy="732.7" r="38.2" fill="#ff8769"></circle>
            <circle cx="254" cy="541.7" r="38.2" fill="#ff966e"></circle>
            <circle
              cx="378.1"
              cy="379"
              r="38.2"
              transform="translate(-56.57 691.51) rotate(-80.78)"
              fill="#ffac76"
            ></circle>
            <circle cx="728.5" cy="172.2" r="38.2" fill="#b6b093"></circle>
            <circle cx="540.5" cy="251.4" r="38.2" fill="#e0ad82"></circle>
          </g>
          <g id="Fourth_Circle">
            <circle cx="1058" cy="46.7" r="46" fill="#58b0bb"></circle>
            <circle cx="823" cy="46" r="46" fill="#9aab99"></circle>
            <circle cx="1288.5" cy="108.4" r="46" fill="#00b3e2"></circle>
            <g>
              <circle cx="1489.3" cy="226.7" r="46" fill="#00b1ea"></circle>
              <circle cx="1652.9" cy="391.7" r="46" fill="#089ee8"></circle>
              <circle cx="1769.9" cy="595.2" r="46" fill="#00a1e8"></circle>
              <circle cx="1829.9" cy="821.2" r="46" fill="#3688e5"></circle>
              <circle cx="1829.5" cy="1058.7" r="46" fill="#5b70e9"></circle>
              <circle cx="1767" cy="1287.2" r="46" fill="#844de7"></circle>
              <circle cx="1651.2" cy="1488.4" r="46" fill="#ae30eb"></circle>
              <circle cx="1484.8" cy="1655.7" r="46" fill="#c824e9"></circle>
              <circle cx="1279" cy="1773" r="46" fill="#d81dcf"></circle>
              <circle cx="1051" cy="1831.7" r="46" fill="#d61cce"></circle>
              <circle cx="817" cy="1828.7" r="46" fill="#e81bac"></circle>
              <circle cx="591.5" cy="1766.7" r="46" fill="#f81c66"></circle>
              <circle cx="390.2" cy="1649.7" r="46" fill="#fb3157"></circle>
              <circle cx="225.5" cy="1483.7" r="46" fill="#fe4856"></circle>
              <circle cx="106" cy="1280.7" r="46" fill="#ff5c56"></circle>
              <circle cx="46" cy="1055.7" r="46" fill="#ff7060"></circle>
              <circle cx="46.8" cy="816.8" r="46" fill="#ff7e60"></circle>
              <circle cx="105.5" cy="588.9" r="46" fill="#ff8c62"></circle>
              <circle cx="226.1" cy="388.7" r="46" fill="#ff9c66"></circle>
              <circle cx="395.5" cy="224.4" r="46" fill="#f7a872"></circle>
              <circle cx="597" cy="104.4" r="46" fill="#cdaa84"></circle>
            </g>
          </g>
        </svg>
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="logo"
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {page === "email" && <SigninContent page={page} email={email} password={password} inputValueHandler={inputValueHandler} error={error} handelLogin={handelemail}/>}
      {page === "password" && <SigninContent page={page} email={email} password={password} inputValueHandler={inputValueHandler} error={error} handelLogin={handelPassword}/>}

    </div>
  );
};

export default Login;
