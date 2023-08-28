'use client'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { ForumPost, User, Forum } from '@/types'
import React from 'react'
import { BiCommentDetail, BiUpvote } from 'react-icons/bi'
import { useRetrieveUserByIdQuery } from '@/redux/features/authApiSlice'
import {
  useRetrieveForumQuery,
  useRegisterToggleVoteMutation,
} from '@/redux/features/forumApiSlice'
import cn from 'classnames'
import Link from 'next/link'
import { useMutation } from '@/hooks'

interface Props {
  post: ForumPost
  className?: string
  bigTitle?: boolean
}

const Post = ({ post, className, bigTitle }: Props) => {
  const host = process.env.NEXT_PUBLIC_HOST
  const [user, setUser] = useState<User>()
  const [forum, setForum] = useState<Forum>()
  const [voteCount, setVoteCount] = useState<number>(
    post.upvote_count ? post.upvote_count : 0,
  )

  const { toggleOnAction } = useMutation(
    useRegisterToggleVoteMutation,
    { post_id: post.id },
    'toggle',
  )

  const {
    data: fetchedUser,
    isLoading,
    isError,
  } = useRetrieveUserByIdQuery(post.author)

  const {
    data: fetchedForum,
    isLoading: isForumLoading,
    isError: isForumError,
  } = useRetrieveForumQuery(post.forum)

  useEffect(() => {
    setUser(fetchedUser)
  }, [fetchedUser])

  useEffect(() => {
    setForum(fetchedForum)
  }, [fetchedForum])

  if (isLoading && isForumLoading) return <div>Loading...</div>

  if (isError && isForumError) return <div>Something went wrong...</div>

  const handleToggle = async () => {
    try {
      const response = await toggleOnAction()

      if (response.data?.type === 'unvote') {
        setVoteCount(voteCount - 1)
        console.log('success')
      } else {
        setVoteCount(voteCount + 1)
        console.log('success')
      }
    } catch (error) {
      console.error('Error toggle voting:', error)
    }
  }

  return (
    <div
      className={cn(
        `${
          bigTitle ? '' : 'h-64'
        } w-full flex flex-col gap-3 shadow border-[1px] rounded-2xl p-4 px-5`,
        className,
      )}
    >
      {/* <!-- Head Section --> */}
      {bigTitle && (
        <div className="text-2xl p-4 m-3 font-semibold border-b-2">
          {post.title}
        </div>
      )}
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            src={`${host}/${user?.profile_picture}`}
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="ml-3">
          <div className="font-semibold">{`${user?.first_name} ${user?.last_name}`}</div>
          <div className="text-sm text-gray-500">
            {dayjs(post.created_at).format('DD-MMM-YYYY HH:mm A')}
          </div>
        </div>
        {/* <!-- title --> */}
        <div className="ml-auto">
          <div className="text-sm text-gray-500">{forum?.title}</div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between ">
        {/* <!-- Body Section --> */}
        <div>
          {!bigTitle && (
            <Link href={`/l/forum/${forum?.id}/${post.id}`}>
              <div className="text-lg font-semibold">{post.title}</div>
            </Link>
          )}
          <div className={`mt-2 ${bigTitle ? 'px-6' : ''}`}>{post.content}</div>
        </div>
        {bigTitle && <div className="border-b-2 p-2 m-4"></div>}
        {/* <!-- Footer Section (comment, upvote count) --> */}
        <div className="flex justify-between text-gray-500">
          <div className="flex gap-1 justify-center items-center">
            <BiUpvote
              className="cursor-pointer hover:bg-slate-300 rounded-full p-1 h-6 w-6"
              onClick={handleToggle}
            />{' '}
            {voteCount}
          </div>
          <div className="flex gap-1 justify-center items-center">
            <BiCommentDetail /> {post.comment_count}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
