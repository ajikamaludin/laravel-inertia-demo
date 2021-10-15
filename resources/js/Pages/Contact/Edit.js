import ValidationErrors from '@/Components/ValidationErrors'
import Authenticated from '@/Layouts/Authenticated'
import { useForm } from '@inertiajs/inertia-react'

export default function Edit(props) {
    const { data, setData, errors, put, processing } = useForm({
        name: props.contact.name,
        phone: props.contact.phone,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('contacts.update', props.contact.id))
    }

    return (
        <Authenticated
            breadcrumbs={[
                { name: 'Contacts', link: 'contacts.index' },
                { name: 'Edit', link: '#' },
            ]}
        >
            <div className="py-4">
                <div className="bg-white rounded-box p-6">
                    <ValidationErrors errors={errors} />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className={`input input-bordered ${
                                errors.name ? 'input-error' : ''
                            }`}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">
                                {errors.name}
                            </span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Phone"
                            className={`input input-bordered ${
                                errors.phone ? 'input-error' : ''
                            }`}
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt">
                                {errors.phone}
                            </span>
                        </label>
                    </div>

                    <div
                        className={`btn btn-secondary mt-3 ${
                            processing ? 'loading' : ''
                        }`}
                        onClick={handleSubmit}
                    >
                        Save
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
