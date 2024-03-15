"use client"

import { customButtonProps } from "@/types"

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles}: customButtonProps) => {
    return (
        <button disabled={false} type={btnType || "button"} className={`custom-btn`} onClick={()=> {}}>
            <span className={`flex-1 ${containerStyles} ${textStyles}`} onClick={handleClick}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton