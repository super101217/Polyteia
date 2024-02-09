import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "numeric_data",
})
export class NumericEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  _id: number;

  @Column({ name: "numeric" })
  numeric: number;
}
