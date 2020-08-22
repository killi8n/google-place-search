import { key } from "../lib/key";
import { placePhoto } from "../lib/api";

describe("place photo api test", () => {
  test("is key existing", () => {
    expect(key).toBeDefined();
  });

  test("place photo api test", async (done) => {
    const result = await placePhoto({
      photoReference:
        "CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU",
      maxWidth: 400,
      key,
    });
    expect(result.size).toBeGreaterThan(0);
    done();
  });
});
