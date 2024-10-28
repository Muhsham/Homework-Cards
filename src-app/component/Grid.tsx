export default function Grid() {
    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-5 gap-2 m-6 h-44">
                <div className="row-span-4 bg-red-400 flex justify-center items-center">Project-1</div>
                <div className="row-span-4 bg-orange-400 flex justify-center items-center">Project-2</div>
                <div className="row-span-4 bg-sky-400 flex justify-center items-center">Project-3</div>
                
                <div className="row-span-4 bg-blue-400 flex justify-center items-center">Project-4</div>
                <div className="row-span-4 bg-red-400 flex justify-center items-center">Project-5</div>
            </div>
        </div>
    )
}