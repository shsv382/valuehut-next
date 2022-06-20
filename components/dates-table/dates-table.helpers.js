export const sortStreams = (streams) => {
    return streams.sort((stream1, stream2) => (new Date(stream1.startDate) - new Date(stream2.startDate)))
} 
