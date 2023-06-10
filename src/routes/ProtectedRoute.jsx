import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'


export default function ProtectedRoute(props) {
	const token = localStorage.getItem('token')
	const { component: Component, ...remProps } = props

	return (
		<Route
			{...remProps}
			render={remProps => (
				(token) ?
					<Component {...remProps} /> :
					<Redirect to='/login' />
			)}
		/>
	);
}
