
import { BuyersList } from "@/components/buyers-list";
import {  $buyers } from "@/store/api";
import { useStore } from "@nanostores/react";


export default function Page(){
    const {data, loading, error } = useStore($buyers)
    if(data) return <BuyersList buyers={data}/>
    if(loading) return <>Loading...</>;
    return <>Error!={String(error)}</>
    
    
}