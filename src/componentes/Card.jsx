import Button from "./Button"

export default function Card() {

    return (
        <div className="bg-[#1f1f1f] p-6 h-auto rounded-xl font-inter flex flex-col items-center justify-center">
            <div className="flex rounded-full h-20 w-20 ">
                <img src="./avatar-jessica.jpeg" alt="Jessica Randall"
                    className="object-cover rounded-full" />
            </div>

            <h1 className="text-[#fff] text-2xl font-semibold mt-4 mb-2">Jessica Randall</h1>
            <p className="text-[#c5f82a] font-semibold text-sm mb-4">London, United Kingdom</p>
            <p className="text-[#fff] mb-4">"Front-end developer and avid reader."</p>
            <Button text="GitHub" />
            <div className="flex flex-col gap-4 mt-4 w-full">
                <Button text="Frontend Mentor" />
                <Button text="Linkedin" />
                <Button text="Twitter" />
                <Button text="Instagram" />
            </div>
        </div>

    )
}