
import { Experience } from '../types'

const fetchExperiences = async () => {
    try {
      const response = await fetch(`https://api.baserow.io/api/database/rows/table/150977/?user_field_names=true`, {
        method: 'GET',
        headers: {
          Authorization: `Token zdKvVjEjTRjpFnsSoon1Q0CL3qqns1cN`,
        },
      })

      const experiences: Experience[] = await response.json()
      .then((data) => data?.results)
      .then((rows) => {
        return rows.map((row: any) => ({
          company: row.company,
          role: row.role,
          description: row.description,
          descriptionZH: row.description_zh,
          logo: row.logo ? row.logo : row.image[0].url,
          tags: row.tags.split(', '),
          startDate: row.startDate,
          endDate: row.endDate,
          url: row.url,
          location: row.location,
          active: row.active
        }))
      })

      console.log(experiences)

      return experiences

    } catch (error) {
      console.log(error)
      return []
    }
}

export default fetchExperiences