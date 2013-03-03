﻿///<reference path="./jaydata.d.ts" />
/*//////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated by JaySvcUtil.exe http://JayData.org for more info        /////////
//////                      oData V3 TypeScript                                /////////
//////////////////////////////////////////////////////////////////////////////////////*/


module ChinookModel {
  class Album extends $data.Entity {
    constructor ();
    constructor (initData: { AlbumId?: number; Title?: string; ArtistId?: number; Artist?: ChinookModel.Artist; Tracks?: ChinookModel.Track[]; });
    AlbumId: number;
    Title: string;
    ArtistId: number;
    Artist: ChinookModel.Artist;
    Tracks: ChinookModel.Track[];
    
  }

  export interface AlbumQueryable extends $data.Queryable {
    filter(predicate:(it: ChinookModel.Album) => bool): ChinookModel.AlbumQueryable;
    filter(predicate:(it: ChinookModel.Album) => bool, thisArg: any): ChinookModel.AlbumQueryable;

    map(projection: (it: ChinookModel.Album) => any): ChinookModel.AlbumQueryable;

    length(): $data.IPromise;
    length(handler: (result: number) => void): $data.IPromise;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;

    forEach(handler: (it: ChinookModel.Album) => void ): $data.IPromise;
    
    toArray(): $data.IPromise;
    toArray(handler: (result: ChinookModel.Album[]) => void): $data.IPromise;
    toArray(handler: { success?: (result: ChinookModel.Album[]) => void; error?: (result: any) => void; }): $data.IPromise;

    single(predicate: (it: ChinookModel.Album, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Album) => void): $data.IPromise;
    single(predicate: (it: ChinookModel.Album, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Album[]) => void; error?: (result: any) => void; }): $data.IPromise;

    take(amout: number): ChinookModel.AlbumQueryable;
    skip(amout: number): ChinookModel.AlbumQueryable;

    order(selector: string): ChinookModel.AlbumQueryable;
    orderBy(predicate: (it: ChinookModel.Album) => any): ChinookModel.AlbumQueryable;
    orderByDescending(predicate: (it: ChinookModel.Album) => any): ChinookModel.AlbumQueryable;
    
    first(predicate: (it: ChinookModel.Album, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Album) => void): $data.IPromise;
    first(predicate: (it: ChinookModel.Album, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Album[]) => void; error?: (result: any) => void; }): $data.IPromise;
    
    include(selector: string): ChinookModel.AlbumQueryable;
    withInlineCount(): ChinookModel.AlbumQueryable;
    withInlineCount(selector: string): ChinookModel.AlbumQueryable;

    removeAll(): $data.IPromise;
    removeAll(handler: (count: number) => void): $data.IPromise;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;
  }


  export interface AlbumSet extends AlbumQueryable {
    add(initData: { AlbumId?: number; Title?: string; ArtistId?: number; Artist?: ChinookModel.Artist; Tracks?: ChinookModel.Track[]; }): ChinookModel.Album;
    add(item: ChinookModel.Album): ChinookModel.Album;

    attach(item: ChinookModel.Album): void;
    attach(item: { AlbumId: number; }): void;
    attachOrGet(item: ChinookModel.Album): ChinookModel.Album;
    attachOrGet(item: { AlbumId: number; }): ChinookModel.Album;

    detach(item: ChinookModel.Album): void;
    detach(item: { AlbumId: number; }): void;

    remove(item: ChinookModel.Album): void;
    remove(item: { AlbumId: number; }): void;
    
    elementType: new (initData: { AlbumId?: number; Title?: string; ArtistId?: number; Artist?: ChinookModel.Artist; Tracks?: ChinookModel.Track[]; }) => ChinookModel.Album;
  }

  class Artist extends $data.Entity {
    constructor ();
    constructor (initData: { ArtistId?: number; Name?: string; Albums?: ChinookModel.Album[]; });
    ArtistId: number;
    Name: string;
    Albums: ChinookModel.Album[];
    
  }

  export interface ArtistQueryable extends $data.Queryable {
    filter(predicate:(it: ChinookModel.Artist) => bool): ChinookModel.ArtistQueryable;
    filter(predicate:(it: ChinookModel.Artist) => bool, thisArg: any): ChinookModel.ArtistQueryable;

    map(projection: (it: ChinookModel.Artist) => any): ChinookModel.ArtistQueryable;

    length(): $data.IPromise;
    length(handler: (result: number) => void): $data.IPromise;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;

    forEach(handler: (it: ChinookModel.Artist) => void ): $data.IPromise;
    
    toArray(): $data.IPromise;
    toArray(handler: (result: ChinookModel.Artist[]) => void): $data.IPromise;
    toArray(handler: { success?: (result: ChinookModel.Artist[]) => void; error?: (result: any) => void; }): $data.IPromise;

    single(predicate: (it: ChinookModel.Artist, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Artist) => void): $data.IPromise;
    single(predicate: (it: ChinookModel.Artist, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Artist[]) => void; error?: (result: any) => void; }): $data.IPromise;

    take(amout: number): ChinookModel.ArtistQueryable;
    skip(amout: number): ChinookModel.ArtistQueryable;

    order(selector: string): ChinookModel.ArtistQueryable;
    orderBy(predicate: (it: ChinookModel.Artist) => any): ChinookModel.ArtistQueryable;
    orderByDescending(predicate: (it: ChinookModel.Artist) => any): ChinookModel.ArtistQueryable;
    
    first(predicate: (it: ChinookModel.Artist, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Artist) => void): $data.IPromise;
    first(predicate: (it: ChinookModel.Artist, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Artist[]) => void; error?: (result: any) => void; }): $data.IPromise;
    
    include(selector: string): ChinookModel.ArtistQueryable;
    withInlineCount(): ChinookModel.ArtistQueryable;
    withInlineCount(selector: string): ChinookModel.ArtistQueryable;

    removeAll(): $data.IPromise;
    removeAll(handler: (count: number) => void): $data.IPromise;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;
  }


  export interface ArtistSet extends ArtistQueryable {
    add(initData: { ArtistId?: number; Name?: string; Albums?: ChinookModel.Album[]; }): ChinookModel.Artist;
    add(item: ChinookModel.Artist): ChinookModel.Artist;

    attach(item: ChinookModel.Artist): void;
    attach(item: { ArtistId: number; }): void;
    attachOrGet(item: ChinookModel.Artist): ChinookModel.Artist;
    attachOrGet(item: { ArtistId: number; }): ChinookModel.Artist;

    detach(item: ChinookModel.Artist): void;
    detach(item: { ArtistId: number; }): void;

    remove(item: ChinookModel.Artist): void;
    remove(item: { ArtistId: number; }): void;
    
    elementType: new (initData: { ArtistId?: number; Name?: string; Albums?: ChinookModel.Album[]; }) => ChinookModel.Artist;
  }

  class Genre extends $data.Entity {
    constructor ();
    constructor (initData: { GenreId?: number; Name?: string; Tracks?: ChinookModel.Track[]; });
    GenreId: number;
    Name: string;
    Tracks: ChinookModel.Track[];
    
  }

  export interface GenreQueryable extends $data.Queryable {
    filter(predicate:(it: ChinookModel.Genre) => bool): ChinookModel.GenreQueryable;
    filter(predicate:(it: ChinookModel.Genre) => bool, thisArg: any): ChinookModel.GenreQueryable;

    map(projection: (it: ChinookModel.Genre) => any): ChinookModel.GenreQueryable;

    length(): $data.IPromise;
    length(handler: (result: number) => void): $data.IPromise;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;

    forEach(handler: (it: ChinookModel.Genre) => void ): $data.IPromise;
    
    toArray(): $data.IPromise;
    toArray(handler: (result: ChinookModel.Genre[]) => void): $data.IPromise;
    toArray(handler: { success?: (result: ChinookModel.Genre[]) => void; error?: (result: any) => void; }): $data.IPromise;

    single(predicate: (it: ChinookModel.Genre, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Genre) => void): $data.IPromise;
    single(predicate: (it: ChinookModel.Genre, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Genre[]) => void; error?: (result: any) => void; }): $data.IPromise;

    take(amout: number): ChinookModel.GenreQueryable;
    skip(amout: number): ChinookModel.GenreQueryable;

    order(selector: string): ChinookModel.GenreQueryable;
    orderBy(predicate: (it: ChinookModel.Genre) => any): ChinookModel.GenreQueryable;
    orderByDescending(predicate: (it: ChinookModel.Genre) => any): ChinookModel.GenreQueryable;
    
    first(predicate: (it: ChinookModel.Genre, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Genre) => void): $data.IPromise;
    first(predicate: (it: ChinookModel.Genre, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Genre[]) => void; error?: (result: any) => void; }): $data.IPromise;
    
    include(selector: string): ChinookModel.GenreQueryable;
    withInlineCount(): ChinookModel.GenreQueryable;
    withInlineCount(selector: string): ChinookModel.GenreQueryable;

    removeAll(): $data.IPromise;
    removeAll(handler: (count: number) => void): $data.IPromise;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;
  }


  export interface GenreSet extends GenreQueryable {
    add(initData: { GenreId?: number; Name?: string; Tracks?: ChinookModel.Track[]; }): ChinookModel.Genre;
    add(item: ChinookModel.Genre): ChinookModel.Genre;

    attach(item: ChinookModel.Genre): void;
    attach(item: { GenreId: number; }): void;
    attachOrGet(item: ChinookModel.Genre): ChinookModel.Genre;
    attachOrGet(item: { GenreId: number; }): ChinookModel.Genre;

    detach(item: ChinookModel.Genre): void;
    detach(item: { GenreId: number; }): void;

    remove(item: ChinookModel.Genre): void;
    remove(item: { GenreId: number; }): void;
    
    elementType: new (initData: { GenreId?: number; Name?: string; Tracks?: ChinookModel.Track[]; }) => ChinookModel.Genre;
  }

  class MediaType extends $data.Entity {
    constructor ();
    constructor (initData: { MediaTypeId?: number; Name?: string; Tracks?: ChinookModel.Track[]; });
    MediaTypeId: number;
    Name: string;
    Tracks: ChinookModel.Track[];
    
  }

  export interface MediaTypeQueryable extends $data.Queryable {
    filter(predicate:(it: ChinookModel.MediaType) => bool): ChinookModel.MediaTypeQueryable;
    filter(predicate:(it: ChinookModel.MediaType) => bool, thisArg: any): ChinookModel.MediaTypeQueryable;

    map(projection: (it: ChinookModel.MediaType) => any): ChinookModel.MediaTypeQueryable;

    length(): $data.IPromise;
    length(handler: (result: number) => void): $data.IPromise;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;

    forEach(handler: (it: ChinookModel.MediaType) => void ): $data.IPromise;
    
    toArray(): $data.IPromise;
    toArray(handler: (result: ChinookModel.MediaType[]) => void): $data.IPromise;
    toArray(handler: { success?: (result: ChinookModel.MediaType[]) => void; error?: (result: any) => void; }): $data.IPromise;

    single(predicate: (it: ChinookModel.MediaType, params?: any) => bool, params?: any, handler?: (result: ChinookModel.MediaType) => void): $data.IPromise;
    single(predicate: (it: ChinookModel.MediaType, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.MediaType[]) => void; error?: (result: any) => void; }): $data.IPromise;

    take(amout: number): ChinookModel.MediaTypeQueryable;
    skip(amout: number): ChinookModel.MediaTypeQueryable;

    order(selector: string): ChinookModel.MediaTypeQueryable;
    orderBy(predicate: (it: ChinookModel.MediaType) => any): ChinookModel.MediaTypeQueryable;
    orderByDescending(predicate: (it: ChinookModel.MediaType) => any): ChinookModel.MediaTypeQueryable;
    
    first(predicate: (it: ChinookModel.MediaType, params?: any) => bool, params?: any, handler?: (result: ChinookModel.MediaType) => void): $data.IPromise;
    first(predicate: (it: ChinookModel.MediaType, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.MediaType[]) => void; error?: (result: any) => void; }): $data.IPromise;
    
    include(selector: string): ChinookModel.MediaTypeQueryable;
    withInlineCount(): ChinookModel.MediaTypeQueryable;
    withInlineCount(selector: string): ChinookModel.MediaTypeQueryable;

    removeAll(): $data.IPromise;
    removeAll(handler: (count: number) => void): $data.IPromise;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;
  }


  export interface MediaTypeSet extends MediaTypeQueryable {
    add(initData: { MediaTypeId?: number; Name?: string; Tracks?: ChinookModel.Track[]; }): ChinookModel.MediaType;
    add(item: ChinookModel.MediaType): ChinookModel.MediaType;

    attach(item: ChinookModel.MediaType): void;
    attach(item: { MediaTypeId: number; }): void;
    attachOrGet(item: ChinookModel.MediaType): ChinookModel.MediaType;
    attachOrGet(item: { MediaTypeId: number; }): ChinookModel.MediaType;

    detach(item: ChinookModel.MediaType): void;
    detach(item: { MediaTypeId: number; }): void;

    remove(item: ChinookModel.MediaType): void;
    remove(item: { MediaTypeId: number; }): void;
    
    elementType: new (initData: { MediaTypeId?: number; Name?: string; Tracks?: ChinookModel.Track[]; }) => ChinookModel.MediaType;
  }

  class Playlist extends $data.Entity {
    constructor ();
    constructor (initData: { PlaylistId?: number; Name?: string; Tracks?: ChinookModel.Track[]; });
    PlaylistId: number;
    Name: string;
    Tracks: ChinookModel.Track[];
    
  }

  export interface PlaylistQueryable extends $data.Queryable {
    filter(predicate:(it: ChinookModel.Playlist) => bool): ChinookModel.PlaylistQueryable;
    filter(predicate:(it: ChinookModel.Playlist) => bool, thisArg: any): ChinookModel.PlaylistQueryable;

    map(projection: (it: ChinookModel.Playlist) => any): ChinookModel.PlaylistQueryable;

    length(): $data.IPromise;
    length(handler: (result: number) => void): $data.IPromise;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;

    forEach(handler: (it: ChinookModel.Playlist) => void ): $data.IPromise;
    
    toArray(): $data.IPromise;
    toArray(handler: (result: ChinookModel.Playlist[]) => void): $data.IPromise;
    toArray(handler: { success?: (result: ChinookModel.Playlist[]) => void; error?: (result: any) => void; }): $data.IPromise;

    single(predicate: (it: ChinookModel.Playlist, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Playlist) => void): $data.IPromise;
    single(predicate: (it: ChinookModel.Playlist, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Playlist[]) => void; error?: (result: any) => void; }): $data.IPromise;

    take(amout: number): ChinookModel.PlaylistQueryable;
    skip(amout: number): ChinookModel.PlaylistQueryable;

    order(selector: string): ChinookModel.PlaylistQueryable;
    orderBy(predicate: (it: ChinookModel.Playlist) => any): ChinookModel.PlaylistQueryable;
    orderByDescending(predicate: (it: ChinookModel.Playlist) => any): ChinookModel.PlaylistQueryable;
    
    first(predicate: (it: ChinookModel.Playlist, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Playlist) => void): $data.IPromise;
    first(predicate: (it: ChinookModel.Playlist, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Playlist[]) => void; error?: (result: any) => void; }): $data.IPromise;
    
    include(selector: string): ChinookModel.PlaylistQueryable;
    withInlineCount(): ChinookModel.PlaylistQueryable;
    withInlineCount(selector: string): ChinookModel.PlaylistQueryable;

    removeAll(): $data.IPromise;
    removeAll(handler: (count: number) => void): $data.IPromise;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;
  }


  export interface PlaylistSet extends PlaylistQueryable {
    add(initData: { PlaylistId?: number; Name?: string; Tracks?: ChinookModel.Track[]; }): ChinookModel.Playlist;
    add(item: ChinookModel.Playlist): ChinookModel.Playlist;

    attach(item: ChinookModel.Playlist): void;
    attach(item: { PlaylistId: number; }): void;
    attachOrGet(item: ChinookModel.Playlist): ChinookModel.Playlist;
    attachOrGet(item: { PlaylistId: number; }): ChinookModel.Playlist;

    detach(item: ChinookModel.Playlist): void;
    detach(item: { PlaylistId: number; }): void;

    remove(item: ChinookModel.Playlist): void;
    remove(item: { PlaylistId: number; }): void;
    
    elementType: new (initData: { PlaylistId?: number; Name?: string; Tracks?: ChinookModel.Track[]; }) => ChinookModel.Playlist;
  }

  class Track extends $data.Entity {
    constructor ();
    constructor (initData: { TrackId?: number; Name?: string; AlbumId?: number; MediaTypeId?: number; GenreId?: number; Composer?: string; Milliseconds?: number; Bytes?: number; UnitPrice?: number; Album?: ChinookModel.Album; Genre?: ChinookModel.Genre; MediaType?: ChinookModel.MediaType; Playlists?: ChinookModel.Playlist[]; });
    TrackId: number;
    Name: string;
    AlbumId: number;
    MediaTypeId: number;
    GenreId: number;
    Composer: string;
    Milliseconds: number;
    Bytes: number;
    UnitPrice: number;
    Album: ChinookModel.Album;
    Genre: ChinookModel.Genre;
    MediaType: ChinookModel.MediaType;
    Playlists: ChinookModel.Playlist[];
    
  }

  export interface TrackQueryable extends $data.Queryable {
    filter(predicate:(it: ChinookModel.Track) => bool): ChinookModel.TrackQueryable;
    filter(predicate:(it: ChinookModel.Track) => bool, thisArg: any): ChinookModel.TrackQueryable;

    map(projection: (it: ChinookModel.Track) => any): ChinookModel.TrackQueryable;

    length(): $data.IPromise;
    length(handler: (result: number) => void): $data.IPromise;
    length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;

    forEach(handler: (it: ChinookModel.Track) => void ): $data.IPromise;
    
    toArray(): $data.IPromise;
    toArray(handler: (result: ChinookModel.Track[]) => void): $data.IPromise;
    toArray(handler: { success?: (result: ChinookModel.Track[]) => void; error?: (result: any) => void; }): $data.IPromise;

    single(predicate: (it: ChinookModel.Track, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Track) => void): $data.IPromise;
    single(predicate: (it: ChinookModel.Track, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Track[]) => void; error?: (result: any) => void; }): $data.IPromise;

    take(amout: number): ChinookModel.TrackQueryable;
    skip(amout: number): ChinookModel.TrackQueryable;

    order(selector: string): ChinookModel.TrackQueryable;
    orderBy(predicate: (it: ChinookModel.Track) => any): ChinookModel.TrackQueryable;
    orderByDescending(predicate: (it: ChinookModel.Track) => any): ChinookModel.TrackQueryable;
    
    first(predicate: (it: ChinookModel.Track, params?: any) => bool, params?: any, handler?: (result: ChinookModel.Track) => void): $data.IPromise;
    first(predicate: (it: ChinookModel.Track, params?: any) => bool, params?: any, handler?: { success?: (result: ChinookModel.Track[]) => void; error?: (result: any) => void; }): $data.IPromise;
    
    include(selector: string): ChinookModel.TrackQueryable;
    withInlineCount(): ChinookModel.TrackQueryable;
    withInlineCount(selector: string): ChinookModel.TrackQueryable;

    removeAll(): $data.IPromise;
    removeAll(handler: (count: number) => void): $data.IPromise;
    removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise;
  }


  export interface TrackSet extends TrackQueryable {
    add(initData: { TrackId?: number; Name?: string; AlbumId?: number; MediaTypeId?: number; GenreId?: number; Composer?: string; Milliseconds?: number; Bytes?: number; UnitPrice?: number; Album?: ChinookModel.Album; Genre?: ChinookModel.Genre; MediaType?: ChinookModel.MediaType; Playlists?: ChinookModel.Playlist[]; }): ChinookModel.Track;
    add(item: ChinookModel.Track): ChinookModel.Track;

    attach(item: ChinookModel.Track): void;
    attach(item: { TrackId: number; }): void;
    attachOrGet(item: ChinookModel.Track): ChinookModel.Track;
    attachOrGet(item: { TrackId: number; }): ChinookModel.Track;

    detach(item: ChinookModel.Track): void;
    detach(item: { TrackId: number; }): void;

    remove(item: ChinookModel.Track): void;
    remove(item: { TrackId: number; }): void;
    
    elementType: new (initData: { TrackId?: number; Name?: string; AlbumId?: number; MediaTypeId?: number; GenreId?: number; Composer?: string; Milliseconds?: number; Bytes?: number; UnitPrice?: number; Album?: ChinookModel.Album; Genre?: ChinookModel.Genre; MediaType?: ChinookModel.MediaType; Playlists?: ChinookModel.Playlist[]; }) => ChinookModel.Track;
  }

}

module ChinookService.Models {
  export class ChinookEntities extends $data.EntityContext {
    onReady(): $data.IPromise;
    onReady(handler: (context: ChinookEntities) => void): $data.IPromise;
    Albums: ChinookModel.AlbumSet;
    Artists: ChinookModel.ArtistSet;
    Genres: ChinookModel.GenreSet;
    MediaTypes: ChinookModel.MediaTypeSet;
    Playlists: ChinookModel.PlaylistSet;
    Tracks: ChinookModel.TrackSet;
    
  }
}
