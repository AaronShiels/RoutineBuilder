set xact_abort on

begin transaction

	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Exercises')
	drop table [Exercises]
	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Days')
	drop table [Days]
	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Weeks')
	drop table [Weeks]
	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Routines')
	drop table [Routines]

	create table [dbo].[Routines] (
		[Id] uniqueidentifier not null,
		[Name] nvarchar(40) not null,
		[BodySerialized] nvarchar(max) null,
		[MetadataSerialized] nvarchar(max) null,
		constraint [PK_Routines] primary key ([Id])
	)

commit transaction