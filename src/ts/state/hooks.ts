import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from './'

export const useAppDispatch = (): ThunkDispatch<RootState, undefined, AnyAction> & Dispatch<AnyAction> => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
