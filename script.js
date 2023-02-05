function test() {
    VoiceRSS.speech({
        key: '3ec70864256548acb47fef744d284814',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo', 
        ssml: false
    });
}
