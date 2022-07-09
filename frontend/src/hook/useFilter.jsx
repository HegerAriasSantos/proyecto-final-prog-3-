export default function useFilter(clientes, search) {
		const result = clientes.filter(cliente => {
			return `${cliente.nombre} ${cliente.apellido} ${cliente.telefono} ${cliente.direccion} ${cliente.deuda} ${cliente.abono} ${cliente.total}`
				.toLowerCase()
				.includes(search.toLowerCase());
		});
    return result;
}
