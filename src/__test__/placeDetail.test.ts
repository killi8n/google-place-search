import { key } from '../lib/key'
import { placeDetail } from '../lib/api'
import { Status } from '../types/Status'

describe('api key test', () => {
    test('is key existing', () => {
        expect(key).toBeDefined()
    })

    test('place detail api test', async (done) => {
        const { result, status } = await placeDetail({
            place_id: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
            key,
        })

        expect(status).toBe(Status.OK)
        expect(result.icon).toBeTruthy()
        expect(result.name).toBeTruthy()
        done()
    })
})
