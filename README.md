# SvelteKit Clean Architecture

![Architecture](/static/architecture.png)

`core`: domain, repository, service
`usecase`: Business logic, Dto, interface of some complex logic (eg: inter-domain transaction, modification of state) implemented by `impl/usecase`.