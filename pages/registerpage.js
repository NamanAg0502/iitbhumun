import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';
import data from '../data/data.json';
import { Alert } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
const HomePage = () => {
  
var ab=false;
const aippm = data.aippm;
const ls = data.ls;
const ccc = data.ccc;
const uncsw = data.uncsw;
const ecosoc = data.ecosoc;
const disec = data.disec;
const wto = data.wto;
const unodc = data.unodc;
const ip = data.ip;

const id = Math.floor(100000 + Math.random() * 900000);


  var [error, setError] = useState(true);
  const [error1, setError1] = useState(true);
  const [check, setCheck] = useState(false);
  const [member, setMember] = useState(false);
  const [solo, setSolo] = useState(true);

  const useEmailValidation = (email) => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    return isEmailValid;
  };
  
  const [formInput, setFormInput] = useState({
    Event_ID: id,
    Name: '',
    Age: 0,
    Gender: '',
    City: '',
    Country: '',
    Institute_Name: '',
    Mobile_Number: '',
    Email_ID: '',
    Referral_Code: '',
    No_of_MUNs: '',
    List_of_previous_MUNs: '',
    Awards_in_previous_MUNs: '',
    Committee_Preference_1: '',
    Committee_Preference_2: '',
    Committee_Preference_3: '',
    Committee_1_Country_Preference_1: '',
    Committee_1_Country_Preference_2: '',
    Committee_1_Country_Preference_3: '',
    Committee_2_Country_Preference_1: '',
    Committee_2_Country_Preference_2: '',
    Committee_2_Country_Preference_3: '',
    Committee_3_Country_Preference_1: '',
    Committee_3_Country_Preference_2: '',
    Committee_3_Country_Preference_3: '',
  });
  const [formInput2, setFormInput2] = useState({
    Event_ID: id,
    Name: '',
    Age: 0,
    Gender: '',
    City: '',
    Country: '',
    Institute_Name: '',
    Mobile_Number: '',
    Email_ID: '',
    Referral_Code: '',
    No_of_MUNs: '',
    List_of_previous_MUNs: '',
    Awards_in_previous_MUNs: '',
    Committee_Preference_1: '',
    Committee_Preference_2: '',
    Committee_Preference_3: '',
    Committee_1_Country_Preference_1: '',
    Committee_1_Country_Preference_2: '',
    Committee_1_Country_Preference_3: '',
    Committee_2_Country_Preference_1: '',
    Committee_2_Country_Preference_2: '',
    Committee_2_Country_Preference_3: '',
    Committee_3_Country_Preference_1: '',
    Committee_3_Country_Preference_2: '',
    Committee_3_Country_Preference_3: '',
  });

  const isEmailValid1 = useEmailValidation(formInput.Email_ID);
  const isEmailValid2 = useEmailValidation(formInput2.Email_ID);
  // const isPhoneValid1 = usePhoneValidation(formInput.Mobile_Number);
  // const isPhoneValid2 = usePhoneValidation(formInput2.Mobile_Number);

  
    

  const handleCheck = (e) => {
    if (error == false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  useEffect(() => {
    if (member == true) {
      if (
        formInput2.Name === '' ||
        formInput2.Age === '0' ||
        formInput2.Gender === '' ||
        formInput2.City === '' ||
        formInput2.Country === '' ||
        formInput2.Institute_Name === '' ||
        formInput2.Mobile_Number === '' ||
        formInput2.Email_ID === '' ||
        formInput2.No_of_MUNs === '' ||
        formInput.Name === '' ||
        formInput.Age === '0' ||
        formInput.Gender === '' ||
        formInput.City === '' ||
        formInput.Country === '' ||
        formInput.Institute_Name === '' ||
        formInput.Mobile_Number === '' ||
        formInput.Email_ID === '' ||
        formInput.No_of_MUNs === '' ||
        isEmailValid1 == false ||
        isEmailValid2 == false
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [formInput, formInput2, member]);
  useEffect(() => {
    if (member == false) {
      if (
        formInput.Name === '' ||
        formInput.Age === '0' ||
        formInput.Gender === '' ||
        formInput.City === '' ||
        formInput.Country === '' ||
        formInput.Institute_Name === '' ||
        formInput.Mobile_Number === '' ||
        formInput.Email_ID === '' ||
        formInput.No_of_MUNs === '' ||
        isEmailValid1 == false
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [formInput, member]);
  useEffect(() => {
    if (
      formInput.Committee_Preference_1 === '' ||
      formInput.Committee_Preference_2 === '' ||
      formInput.Committee_Preference_3 === '' ||
      formInput.Committee_1_Country_Preference_1 === '' ||
      formInput.Committee_1_Country_Preference_2 === '' ||
      formInput.Committee_1_Country_Preference_3 === '' ||
      formInput.Committee_2_Country_Preference_1 === '' ||
      formInput.Committee_2_Country_Preference_2 === '' ||
      formInput.Committee_2_Country_Preference_3 === '' ||
      formInput.Committee_3_Country_Preference_1 === '' ||
      formInput.Committee_3_Country_Preference_2 === '' ||
      formInput.Committee_3_Country_Preference_3 === ''
    ) {
      setError1(true);
    } else {
      setError1(false);
    }
  }, [formInput]);

  const committees = [];

  data.registerCommittees.map((i) => {
    committees.push(i);
  });

  const [selected1, setSelected1] = useState('');

  const handleChange1 = (e) => {
    setFormInput({
      ...formInput,
      Committee_Preference_1: e.target.value,
    });
    setSelected1(e.target.value);
  };

  let type1 = null;
  let options1 = null;

  if (selected1 === 'AIPPM') {
    type1 = aippm;
  } else if (selected1 === 'Lok Sabha') {
    type1 = ls;
  } else if (selected1 === 'CCC') {
    type1 = ccc;
  } else if (selected1 === 'UNCSW') {
    type1 = uncsw;
  } else if (selected1 === 'ECOSOC') {
    type1 = ecosoc;
  } else if (selected1 === 'DISEC') {
    type1 = disec;
  } else if (selected1 === 'WTO(Online)') {
    type1 = wto;
  } else if (selected1 === 'UNODC(Online)') {
    type1 = unodc;
  } else if (selected1 === 'International Press(Hybrid)') {
    type1 = ip;
  }

  if (type1) {
    options1 = type1.map((el) => <option key={el}>{el}</option>);
  }

  const [selected2, setSelected2] = useState('');
  const [pref1option1, setSelected4] = useState('');
  const [pref1option2, setSelected5] = useState('');
  const [pref1option3, setSelected6] = useState('');
  const [pref2option1, setSelected7] = useState('');
  const [pref2option2, setSelected8] = useState('');
  const [pref2option3, setSelected9] = useState('');
  const [pref3option1, setSelected10] = useState('');
  const [pref3option2, setSelected11] = useState('');
  const [pref3option3, setSelected12] = useState('');

  const handleChange2 = (e) => {
    setFormInput({
      ...formInput,
      Committee_Preference_2: e.target.value,
    });
    setSelected2(e.target.value);
  };

  let type2 = null;
  let options2 = null;

  if (selected2 === 'AIPPM') {
    type2 = aippm;
  } else if (selected2 === 'Lok Sabha') {
    type2 = ls;
  } else if (selected2 === 'CCC') {
    type2 = ccc;
  } else if (selected2 === 'UNCSW') {
    type2 = uncsw;
  } else if (selected2 === 'ECOSOC') {
    type2 = ecosoc;
  } else if (selected2 === 'DISEC') {
    type2 = disec;
  } else if (selected2 === 'WTO(Online)') {
    type2 = wto;
  } else if (selected2 === 'UNODC(Online)') {
    type2 = unodc;
  } else if (selected2 === 'International Press(Hybrid)') {
    type2 = ip;
  }

  if (type2) {
    options2 = type2.map((el) => <option key={el}>{el}</option>);
  }

  const [selected3, setSelected3] = useState('');

  const handleChange3 = (e) => {
    setFormInput({
      ...formInput,
      Committee_Preference_3: e.target.value,
    });
    setSelected3(e.target.value);
  };

  let type3 = null;
  let options3 = null;

  if (selected3 === 'AIPPM') {
    type3 = aippm;
  } else if (selected3 === 'Lok Sabha') {
    type3 = ls;
  } else if (selected3 === 'CCC') {
    type3 = ccc;
  } else if (selected3 === 'UNCSW') {
    type3 = uncsw;
  } else if (selected3 === 'ECOSOC') {
    type3 = ecosoc;
  } else if (selected3 === 'DISEC') {
    type3 = disec;
  } else if (selected3 === 'WTO(Online)') {
    type3 = wto;
  } else if (selected3 === 'UNODC(Online)') {
    type3 = unodc;
  } else if (selected3 === 'International Press(Hybrid)') {
    type3 = ip;
  }

  if (type3) {
    options3 = type3.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <div id='qt'>
      <Head>
      
        
        <title>MUN Registration Form</title>
      </Head>
      <Script src="/registermyversion.js"/>
        <Script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js" />
    <Script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js" />
      <style global></style>
      <div className={check?'hidden':'block'}>
    <div className="container mx-auto my-auto mb-auto  px-4 py-8" >
    <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[4.5rem] pt-8">
        Delegate Application Form
          </p>
          <div className="place-items-center flex justify-center font-semibold text-center py-16">
            <div
              
              className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full "
            >
              1
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">Personal Info</div>
            <div
             onClick={handleCheck}
              className={`text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full cursor-pointer ${ab?`text-[#FFFFFF] bg-[#1A1E21]`:``}`}
            >
              2
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">Portfolio Selection</div>
            <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full cursor-pointer ">
              3
            </div>
          </div>
      <form id="registrationForm"  className=" bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:*</label>
          <input type="text" id="name_field" placeholder="Enter your name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="age" required className="block text-gray-700 font-bold mb-2">Age:*</label>
          <input type="number" id="age" placeholder="Age" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender*</label>
          <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="Insitute" required className="block text-gray-700 font-bold mb-2">Name of Institution:</label>
          <input type="text" placeholder="College or University" id="Institute" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="region" required className="block text-gray-700 font-bold mb-2">Region:*</label>
          <input type="text" placeholder="City or state" id="region" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" required className="block text-gray-700 font-bold mb-2">Email:*</label>
          <input type="email" placeholder="abc264@gmail.com" id="email_field" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="Password" required className="block text-gray-700 font-bold mb-2">Password:*</label>
          <input type="password" placeholder="Use a strong password" id="password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="MUNcount" className="block text-gray-700 font-bold mb-2">Number of MUNS participated earlier:*</label>
          <input type="number" id="muncount" placeholder="" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="pastaward" className="block text-gray-700 font-bold mb-2">MUN Awards won in past:</label>
          <input type="text" placeholder="Leave if none" id="pastaward"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="refferalcode"  className="block text-gray-700 font-bold mb-2">Referral code:</label>
          <input type="text"   placeholder="Optional" id="refferalcode"   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
  
       
        
        
        <div className="registeroptions2">
        <button  type="button" onClick={handleCheck}  className="w-full bg-green-500 text-white weight-bold py-2 px-1 font-bold rounded-lg hover:bg-blue-600" >
      Select portfolio in next page</button>
      <Link href="/home">
                      <button              
          className="w-full bg-red-500 text-white py-2 px-2 rounded-lg font-bold hover:bg-blue-600">
                        Cancel
                      </button>
                    </Link>
                    </div>
      </form>
    </div></div>
    
                    
                   
                  
                
  
                  {error=false}
                 
        <div className={check ? 'block' : 'hidden' }>
          <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[4.5rem] pt-8 my-5 ">
            Delegate Application Form
          </p>

          <div className="place-items-center flex justify-center font-semibold text-center  pt-12 mb-12 mt-60px ">
            <div
              onClick={() => {
                setCheck(false);
              }}
              className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  "
            >
              1
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
            <div
              onClick={() => {
                setCheck(true);
              }}
              className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full "
            >
              2
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
            <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
              3
            </div>
          </div>
          <form id='form2'> 
          <div className="flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3 items-center py-12 m-auto justify-items-center">
            <div>
              
              <p className=" text-center font-bold text-3xl mb-5">
                PORTFOLIO I
              </p>

              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>
                <select id='Committee1'
                  name="Committee1" 
                  value={selected1}
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange1(e);
                    
                   
                  }} 
                >
                  {committees.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 1
                  </p>
                  <select id='pref1option1'
                    name="Option 1" value={pref1option1}
                    className="w-72 p-2 rounded-lg"   
                    on onChange={(e)=>{setSelected4(e.target.value)}}
                  >
                    {options1}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select value={pref1option2}
                    name="Option 2" id='pref1option2'
                    className="w-72 p-2 rounded-lg" 
                    onChange={(e)=>{setSelected5(e.target.value)}}
                  >
                    {options1}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 3
                  </p>
                  <select  value={pref1option3} onChange={(e)=>{setSelected6(e.target.value)}}
                    name="Option 3" id='pref1option3'
                    className="w-72 p-2 rounded-lg"
                  
                  >
                    {options1}
                  </select>
                </div>
              </div>
              
            </div>
           
            <div>
              <p className="mt-4 sm:mt-0 text-center font-bold text-3xl mb-5">
                PORTFOLIO II
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <select value={selected2} id='Committee2'
                  name="Committee1"
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange2(e);
                  }}
                >
                  {committees.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 1
                  </p>
                  <select value={pref2option1} id='pref2option1'onChange={(e)=>{setSelected7(e.target.value)}}
                    name="Option 1"
                    className="w-72 p-2 rounded-lg"
                   
                  >
                    {options2}
                  </select>
                </div>
              </div>{' '}
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select value={pref2option2}
                    name="Option 2" id='pref2option2'
                    className="w-72 p-2 rounded-lg"
                    onChange={(e)=>{setSelected8(e.target.value)}}
                  >
                    {options2}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 3
                  </p>
                  <select value={pref2option3}
                    name="Option 3" id='pref2option3'
                    className="w-72 p-2 rounded-lg"
                    onChange={(e)=>{setSelected9(e.target.value)}}
                  >
                    {options2}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-4 sm:mt-0 text-center font-bold text-3xl mb-5">
                PORTFOLIO III
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <select
                  name="Committee1" id='Committee3'
                  value={selected3}
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange3(e);
                  }}
                >
                  {committees.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 1
                  </p>
                  <select
                    name="Option 1"
                    className="w-72 p-2 rounded-lg"
                    value={pref3option1} id='pref3option1'
                    onChange={(e)=>{setSelected10(e.target.value)}}
                  >
                    {options3}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select
                    name="Option 2"
                    className="w-72 p-2 rounded-lg"
                    value={pref3option2} id='pref3option2'
                    onChange={(e)=>{setSelected11(e.target.value)}}
                  >
                    {options3}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 3
                  </p>
                  <select
                    name="Option 3"
                    className="w-72 p-2 rounded-lg"
                    value={pref3option3} id='pref3option3'
                    onChange={(e)=>{setSelected12(e.target.value)}}
                  >
                    {options3}
                  </select>
                </div>
              </div>
            </div>
          </div>
         
          
          {error1 && (
            <Alert
              className=" m-auto justify-around w-max"
              color="red"
              variant="outlined"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6 m-auto justify-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              Please fill all the required fields to be able to submit your
              form.
            </Alert>
          )}
          <h1 className='registeras'>Register as:</h1>
        <div className="registeroptions">
          
        <button id="register2" type="submit" onClick={handleCheck}  className="w-full bg-green-500 text-white py-2 px-2 m-auto rounded-lg hover:bg-blue-600" data-tooltip="Tooltip content for Single Delegate Start with your country. Do not simply type in your agenda into google and start reading. Type in your country first and get a solid idea of your government economy, conflicts, etc. Make sure you know your heads of state, GDP, major military and political allies, any major conflicts that persist in or around your country, and jot down a couple of notes. Make a small document about your general foreign policy on various issues. Make a document about your stance on social rights, humanitarian rights, military intervention, etc.

        Once you have gotten your country down, and I mean DOWN, now move on to the agenda. Now, some delegates may crucify me for this, but I look at Wikipedia. ">Single Delegate </button>
        <button id="register3" type="submit"   className="w-full bg-green-500 text-white weight-bold py-2 px-1 font-bold rounded-lg hover:bg-blue-600" data-tooltip="Tooltip content for Conference ambassadorStart with your country. Do not simply type in your agenda into google and start reading. Type in your country first and get a solid idea of your government economy, conflicts, etc. Make sure you know your heads of state, GDP, major military and political allies, any major conflicts that persist in or around your country, and jot down a couple of notes. Make a small document about your general foreign policy on various issues. Make a document about your stance on social rights, humanitarian rights, military intervention, etc.

        Once you have gotten your country down, and I mean DOWN, now move on to the agenda. Now, some delegates may crucify me for this, but I look at Wikipedia. " >Conference ambassador</button>
     </div>
     </form>  <div className="flex justify-center m-auto mt-3">
            <button
              onClick={() => {
                setCheck(false);
                setCheck(false);
              }}
              className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2 my-4"
            >
              Back
            </button>
            
          </div>
            </div>
       
    

  

    


    

    
<Script src="registermyversion.js" typeof='module' type='module'/>
<Script src="https://smtpjs.com/v3/smtp.js"/>


    </div>
  );
};

export default HomePage;