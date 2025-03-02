import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken"
import SchematicEmbed from "./SchematicEmbed"

async function SchematicComponent({componentId}:{componentId: string}) {
    if(!componentId) {
        return null;
    }
    // Get access Token
    const accessToken = await getTemporaryAccessToken()
    console.log(accessToken)
    if(!accessToken) {
        throw new Error("Failed to get temporary access token");
    }
  return (
    <SchematicEmbed  accessToken={accessToken} componentId={componentId} />
  )
}

export default SchematicComponent