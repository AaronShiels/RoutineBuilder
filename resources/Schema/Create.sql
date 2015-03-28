set xact_abort on

begin transaction

	if exists (select * from [Information_Schema].[Tables] where [Table_Name] = 'Routines')
	drop table [Routines]

	create table [dbo].[Routines] (
		[Id] uniqueidentifier not null default newid(),
		[Data] nvarchar(max) not null,
		constraint [PK_Routines] primary key ([Id])
	)

commit transaction