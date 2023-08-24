'use client'

import { useRealTimeSectionUpdates } from '@/redux/features/sectionApiSlice'
import SectionItem from '@/components/page-specific/section/SectionItem'
import ListContainer from '@/components/common/ListContainer'
import Modal from '@/components/common/Modal'
import Input from '@/components/forms/Input'
import Button from '@/components/common/Button'
import { useSharedModal, useFormSubmit } from '@/hooks'
import { useRegisterSectionMutation } from '@/redux/features/sectionApiSlice'
import { useParams } from 'next/navigation'

const SectionList = () => {
  const params = useParams()
  const course_id = params.courseId
  console.log('course_id', course_id)
  const { sections, isLoading, isError } = useRealTimeSectionUpdates(course_id)
  const [register] = useRegisterSectionMutation()

  const initialFormData = {
    name: '',
    trimester: '',
    course_id: course_id,
  }

  const { formData, onChange, onSubmit, updateFormData } = useFormSubmit(
    register,
    initialFormData,
  )

  const { updateModalState } = useSharedModal()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div className="px-5">
      <Modal
        sizeClass="w-1/4"
        buttonClass="m-5"
        text="Add Section"
        title="Add Section"
      >
        <Input
          key="section_name"
          labelId="name"
          type="text"
          onChange={onChange}
          value={formData.name}
          required={true}
          className="mb-5 w-full"
        >
          Section Name
        </Input>
        <Input
          key="trimester"
          labelId="trimester"
          type="text"
          onChange={onChange}
          value={formData.code}
          required={true}
        >
          Trimester/Semester Code
        </Input>
        <div className="flex flex-col items-center">
          <Button
            onClick={async (e: any) => {
              const res = await onSubmit(e)
              if (res?.data?.id) {
                updateModalState(false)
                updateFormData(initialFormData)
              }
            }}
            className="mt-5"
          >
            Add Section
          </Button>
        </div>
      </Modal>
      {!isLoading && (
        <ListContainer items={sections} ItemComponent={SectionItem} />
      )}
    </div>
  )
}

export default SectionList
