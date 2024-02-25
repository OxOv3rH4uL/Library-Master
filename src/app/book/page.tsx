"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from 'next/navigation';


function Book(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const router = useRouter();
    function confirm(){
        const url = process.env.NEXT_PUBLIC_BACKEND_URL;
        const id = localStorage.getItem('id');
        const bookId = localStorage.getItem('bookId');
        const bookName = localStorage.getItem('bookTitle');
        const final_date = date?.toString().slice(0,15);
        // console.log(final_date);
        axios.post(`${url}book/${id}/${bookId}/${bookName}/${final_date}`)
        .then(res => {
            if(res.status == 200 && res.data == "Booked Successfully!"){
                alert("Booked Successfully!");
                router.push("/home");
            }else if(res.status == 200  && res.data == "Already Borrowed a Book!"){
                alert("You Already Borrowed a Book!");
                router.push("/home");
            }
        }).catch(err => {
            alert(`Internal Server Error: ${err}`);
        })
    }
    return(
        <>
            <div className="bg-white min-h-screen flex justify-center">
                <div className="pt-20">
                <h1 className="text-black font-bold text-2xl">PICK THE RETURN DATE</h1>
                <div className="pt-10">

                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                </div>
                <div className="flex justify-center pt-10">

                    <Button variant={"secondary"} className="bg-black text-white hover:bg-black" onClick={confirm}>SUBMIT</Button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Book;