import { ReactNode } from "react"

function ContactContainer({ children }:{children:ReactNode}) {
    return (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start justify-center items-center px-16 py-16">

            {children}

        </div>

    )
}

export default ContactContainer