set xact_abort on

begin transaction

	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Routines')
	drop table [Routines]
	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Weeks')
	drop table [Weeks]
	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Days')
	drop table [Days]
	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Exercises')
	drop table [Exercises]

	create table [dbo].[Routines] (
		[Id] uniqueidentifier not null,
		[Name] nvarchar(40) not null,
		[ColoursSerialized] nvarchar(1000) null,
		constraint [PK_Routines] primary key ([Id])
	)

	create table [dbo].[Weeks] (
		[Id] uniqueidentifier not null,
		[RoutineId] uniqueidentifier not null,
		constraint [PK_Weeks] primary key ([Id])
	)

	alter table [Weeks]
	add constraint FK_Routines_Id FOREIGN KEY (RoutineId)
    references [Routines]([Id]);

	create table [dbo].[Days] (
		[Id] uniqueidentifier not null,
		[WeekId] uniqueidentifier not null,
		constraint [PK_Days] primary key ([Id])
	)

	alter table [Days]
	add constraint FK_Weeks_Id FOREIGN KEY (WeekId)
    references [Weeks]([Id]);

	create table [dbo].[Exercises] (
		[Id] uniqueidentifier not null,
		[DayId] uniqueidentifier not null,
		constraint [PK_Exercises] primary key ([Id])
	)

	alter table [Exercises]
	add constraint FK_Days_Id FOREIGN KEY (DayId)
    references [Days]([Id]);

commit transaction