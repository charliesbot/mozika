import { gql, IFieldResolver } from "apollo-server-micro";

export const typeDefs = gql`
  type CreatePlaylistWithSongsPayload {
    playlist: Playlist!
  }

  type Mutation {
    createPlaylistWithSongs(
      userId: String!
      playlistName: String!
      uris: [String]!
    ): CreatePlaylistWithSongsPayload
  }
`;

const createPlaylistWithSongs: IFieldResolver<any, any> = async (
  _,
  variables,
  { client },
) => {
  const { userId, playlistName, uris } = variables;
  const playlist = await client.createPlaylist(userId, playlistName);
  await client.addTracksToPlaylist(playlist.id, uris);
  return { playlist };
};

export const resolvers = {
  Mutation: {
    createPlaylistWithSongs,
  },
};
