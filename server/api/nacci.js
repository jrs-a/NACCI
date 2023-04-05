export default defineEventHandler(async (event) => {
    // backend route for security eme eme

    // the stuff below didn't work, find something else

    // handle query params
    const { name } = useQuery(event)

    // handle POST data
    const { age } = await useBody(event)

    return {
        message: `wow hello hi, ${name}! u r ${age} already!`
    }
})