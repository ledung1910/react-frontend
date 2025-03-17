import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { createCategory } from '../../../api/category.service';

type Inputs = {
  name: string
}

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    const { name } = data;
    const newCategory = {
      name,
      createdAt: new Date().toISOString()
    }
    await createCategory(newCategory);
  }

  return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới danh mục</h1>
    </div>

    <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Tên danh mục</label>

        <div className="relative">
          <input
            // {...register("name", { required: true })}
            {...register("name", { required: true })}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Nhập vào tên danh mục"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Thêm mới
        </button>
      </div>
    </form>
  </div>
}

export default CategoryForm
