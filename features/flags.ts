export enum FeatureFlag {
    TRANSCRIPTION = "transcription",
    IMAGE_GENERATION = "image-generations",
    ANALYSE_VIDEO = "analyse-video",
    TITLE_GENERATION = "title-generations",
    SCRIPT_GENERATION = "script-generation"
}

export const featureFlagEvents: Record<FeatureFlag, {event:string}> = {
    [FeatureFlag.TRANSCRIPTION]: {
        event: "transcribe",
    },
    [FeatureFlag.IMAGE_GENERATION]: {
        event: "generate-image",
    },
    [FeatureFlag.ANALYSE_VIDEO]: {
        event: "analyse-video",
    },
    [FeatureFlag.TITLE_GENERATION]: {
        event: "generate-title",
    },
    [FeatureFlag.SCRIPT_GENERATION]: {
        event: "",
    },
}