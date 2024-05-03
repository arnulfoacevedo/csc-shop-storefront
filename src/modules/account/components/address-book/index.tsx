import { Customer, Region } from "@medusajs/medusa"
import React from "react"

import AddAddress from "../address-card/add-address"
import EditAddress from "../address-card/edit-address-modal"

type AddressBookProps = {
  customer: Omit<Customer, "password_hash">
  region: Region
}

const AddressBook: React.FC<AddressBookProps> = ({ customer, region }) => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        <AddAddress region={region} />
        {customer.shipping_addresses.map((address) => {
          return (
            <EditAddress region={region} address={address} key={address.id} />
          )
        })}
      </div>
    </div>
  )
}

export default AddressBook
