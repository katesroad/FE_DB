import * as React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import clsx from 'clsx'
import './styles.scss'

interface GoHomeProps {
  className?: string
}
export const GoHome: React.FC<GoHomeProps> = React.memo(({ className }) => (
  <Link to="/" className={clsx('ui-go-home', className)}>
    <span>
      <HiOutlineArrowLeft />
      <span>Go To Home</span>
    </span>
  </Link>
))
