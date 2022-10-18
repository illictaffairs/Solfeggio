function change( PlayStop )
{
    if ( PlayStop.value === "play_arrow" )
        PlayStop.value = "pause";
    else
        PlayStop.value = "play_arrow";
}