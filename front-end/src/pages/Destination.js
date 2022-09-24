import { Button } from '@mui/material'
import { useState,useEffect } from 'react';
import axios from 'axios';
function Destination() {
    const [name,setName] = useState('');
    const [phone_number,setPhone_number] = useState('');
    const [province,setProvince] = useState('');
    const [district,setDistrict] = useState('');
    const [parish,setParish] = useState('');
    const [address_details,setAddress_detail] = useState('');
    const [postal_code,setPostal_code] = useState('');
    const url ="http://localhost:8050/Addr"
   
    function createAddr(){
        axios.post(url,{
        name: name,
        phonnumber: phone_number,
        province: province,
        district: district,
        parish: parish,
        addressdetails: address_details,
        postalcode: postal_code
      })
        .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div class="mt-5 flex justify-center">
            <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ที่อยู่</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"></p>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={name} onChange={e => setName(e.target.value)} type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ชื่อ-นามสกุล" required />
                    <label for="phone number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={phone_number} onChange={e => setPhone_number(e.target.value)} type="phone number" id="phone number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="หมายเลขโทรศัพท์" required />
                    <label for="province" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={province} onChange={e => setProvince(e.target.value)}  type="province" id="province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="จังหวัด" required />
                    <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={district} onChange={e => setDistrict(e.target.value)}  type="district" id="district" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="อำเภอ" required />
                    <label for="parish" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={parish} onChange={e => setParish(e.target.value)}  type="parish" id="parisht" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ตำบล" required />
                    <label for="address details" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={address_details} onChange={e => setAddress_detail(e.target.value)}  type="address details" id="address details" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="รายละเอียดที่อยู่" required />
                    <label for="postal code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    <input value={postal_code} onChange={e => setPostal_code(e.target.value)}  type="postal code" id="postal code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="รหัสไปรษณีย์" required />



                </div>
                <div>
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ยกเลิก</button>
                <Button class="ml-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={createAddr} >ยืนยัน
        </Button>
                </div>
            </a>

        </div>
    )



}


export default Destination;