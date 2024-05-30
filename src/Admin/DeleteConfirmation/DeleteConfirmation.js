const DeleteConfirmation = ({isModalOPen, setIsModalOpen, deleteProduct, productId}) => {
  return (
    <div className=' rounded-md md:w-1/3 absolute top-10 bg-slate-50 p-4 border border-slate-200'>
        <h3 className=' text-red-500 mb-4'>Are you sure you want to delete ? </h3>
        <div  className=' flex items-center justify-between'>
          <button onClick={() => setIsModalOpen(false)} className=' bg-indigo-500 text-white rounded-md px-2 py-1'>cancel</button>
          <button onClick={() => (deleteProduct(productId), setIsModalOpen(false))} className=' bg-red-500 text-white rounded-md px-2 py-1'>Delete</button>
        </div>
    </div>
  )
}


  export default DeleteConfirmation