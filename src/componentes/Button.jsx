export default function Button({text}) {
    return (
        <button className="bg-[#333333] text-[#fff] font-semibold py-3 px-6 rounded-lg hover:bg-[#c5f82a] hover:text-[#333333] transition-colors w-full duration-200">
            {text}
        </button>
    )
}