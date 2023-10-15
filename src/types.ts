type Route = {
	path: string
	component: React.FC<{}>
}

type Player = {
	id: number
	username: string
	email: string
	first_name: string
	last_name: string
	avatar: string | null
	estadisticas: Record<string, any> | null
}
