'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <div></div>
  )
}
