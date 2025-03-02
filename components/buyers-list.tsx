import { Buyers } from "@prisma/client";

export function BuyersList({buyers}:{buyers:Buyers[] |null}){
    return<>
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>sity</td>
                    <td>address</td>

                </tr>
            </thead>
            <tbody>
                {buyers?.map(({id, name, email, phone, sity, address, })=> <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{sity}</td>
                    <td>{address}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}